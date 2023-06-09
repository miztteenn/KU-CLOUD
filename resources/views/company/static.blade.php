@extends('layouts.mainCompany')
@section('title','Static | Company')
@section('content') {{--
<script src="{{url('js/justgage-1.2.2/raphael-2.1.4.min.js')}}"></script>
<script src="{{url('js/justgage-1.2.2/justgage.js')}}"></script> --}} {{--
<link rel="stylesheet" href="{{asset('css/toggle-switches.css')}}"> --}}


<style type="text/css">
    .grid-stack-item {}

    .grid-stack-item-content {
        color: #2c3e50;
        text-align: center;
        background-color: #FFFFFF;
        box-shadow: 1px 1px 10px 1px #aaaaaa;
    }

    /* .modal-lg {
        max-width: 1100px !important;
    } */

    .modal-header-custom {
        border-bottom: 0;
    }

    .card {
        box-shadow: none;
    }

    #btn-detail-toggle {
        -moz-transition: transform 0.3s;
        -webkit-transition: transform 0.3s;
        transition: transform 0.3s;
    }

    .flip {
        transform: rotate(180deg);
    }

    .data-list {
        height: 200px;
        position: absolute;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 50;
    }

    .value-datasource:focus {}

    .list-group-item:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    .remove-value,
    .remove-param,
    .remove-datasource {
        transition: all 0.3s;
        cursor: pointer;
    }

    .remove-value:hover,
    .remove-param:hover,
    .remove-datasource:hover {
        transform: scale(1.1);
        color: #e65251
    }

    .activeApi {
        color: #00a855
    }

    .unActiveApi {
        color: #e65251
    }

    .edit-datasource:hover {
        font-weight: bold;
        color: #007bff;
    }

    .form-radar-value {
        padding: 20px;
        border: 2px solid #308ee0;
        border-radius: 27px;
        margin-bottom: 10px;
    }

    .remove-datasource-radar {
        cursor: pointer;
    }

    .remove-datasource-radar:hover {
        transition: all 0.3s;
        color: #e65251
    }

    .widget-type-data:hover {
        transition: 0.3s;
        opacity: 0.8;
    }

    .widget-type-data {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFF;
        height: 50px;
        width: 200px;
        padding: 50px;
        margin: 30px;
        border-radius: 5px;
    }

    .grid-stack>.grid-stack-item>.grid-stack-item-content{
        z-index: unset;
    }

    .btn-download{
        cursor: pointer;
    }

</style>



<div id="layout-full-screen">
    <div class="modal fade" id="modal_full_screen">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header modal-header-custom">
                    <h3>Time series</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body" id="body-full-screen">
                    <div>
                        <div class="row">
                            <div class="col-4">
                                <input type="date" name="static_date" id="static_date" class="form-control form-control-sm">
                            </div>
                        </div>

                        <div id="sliderTime" class="ul-slider slider-success mt-4 noUi-target noUi-ltr noUi-horizontal">

                        </div>

                    </div>
                    <div id="content-widget" class="mt-2" style="height:450px;width:auto">

                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-success btn-block">Append</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row border-bottom" style="padding: 30px 0px 10px 15px">
    <div class="row" style="width:100%" id="top-header">

        <div class="col-6 d-flex align-content-center">
            <h3 class="mr-2">Static</h3>
            <button class="btn btn-success btn-sm btn-radius" id="btn-add-datasource"><i class="fas fa-plus"></i> Add
                Datasources
            </button>
        </div>
        <div class="col-6 text-right">
            <button class="btn btn-success btn-radius" id="addW" style="display:none"><i class="fa fa-plus"></i> Add
                Widget</button>
            <button class="btn btn-warning btn-radius" id="settingW"><i class="fas fa-cog"></i></button>
            <button class="btn btn-primary btn-radius" id="saveW" style="display:none"><i class="fas fa-save"></i></button>
            <button class="btn btn-danger btn-radius" id="cancelW" style="display:none"><i class="fas fa-times"></i></button>
        </div>
        <div class="col-12" id="list_datasource">

        </div>
    </div>

    <div class="col-12 d-flex justify-content-center">
        <i class="fas fa-angle-up fa-lg" id="btn-detail-toggle" style="cursor:pointer"></i>
    </div>

</div>
<br />

<div class="contrainner">

    <div class="d-flex flex-wrap align-content-center" id="loading" style="height:500px">
        <div class="lds-ring text-center mx-auto">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="grid-stack"></div>
    <!-- <textarea id="saved-data" cols="100" rows="20" readonly="readonly"></textarea> -->

    <div class="modal fade" id="addWidget">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Add Widget</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                    {{--
                    <div id="select-type">
                        <div class="row text-center d-flex justify-content-center">
                            <div class="bg-success widget-type-data" type="RealTime">
                                Real time
                            </div>
                            <div class="bg-primary widget-type-data" type="Static">
                                Static
                            </div>
                        </div>
                    </div> --}}

                    <div class="row">
                        <div class="col-12">
                            <label>Widget Type <span class="text-danger">*</span></label>
                            <select class="form-control" id="widget_type" name="widget_type">
                                <option value="">--Select Widget Type--</option>
                                <optgroup label="Realtime">
                                    <option value="MutiLine">MutiLine</option>
                                    <option value="Radar">Radar</option>
                                    <option value="Map">Map</option>
                                    <option value="Table">Table</option>
                                    <option value="TextLine">Text Line</option>
                                    <option value="Gauges">Gauges</option>
                                    <option value="TextValue">TextValue</option>
                                    <option value="TextBox">TextBox</option>
                                </optgroup>
                                <optgroup label="Static">
                                    <option value="MutiLine_static">MutiLine</option>
                                    <option value="Radar_static">Radar</option>
                                    <option value="Map_static">Map</option>
                                    <option value="Table_static">Table</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>

                    <div class="row" id="default_value" style="display: none">
                        <div class="col-6">
                            <label>Title</label>
                            <input type="text" name="title_name" id="title-name" class="form-control">
                        </div>
                        <div class="col-6">
                            <label for="">Set time interval (s) <span class="text-danger">*</span></label>
                            <input type="number" name="time_interval" id="time-interval" class="form-control" value="1">
                        </div>
                    </div>

                    <div id="text_box" class="value-widget" style="display:none;">
                        <div class="row">
                            <div class="col-6">
                                <label>Text <span class="text-danger">*</span></label>
                                <input type="text" id="text_custom" class="form-control" />
                            </div>
                            <div class="col-6">
                                <label>Font Size (px) <span class="text-danger">*</span></label>
                                <input type="number" id="font_size" class="form-control" />
                            </div>
                        </div>
                    </div>

                    <div id="MutiLine" class="value-widget mt-2" style="display:none;">
                        <div class="form-group">
                            <label>Do you want to group data ?</label>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" name="isGroupDataMutiLine" class="form-check-input isGroupDataMutiLine"
                                        value="1">Yes
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" name="isGroupDataMutiLine" class="form-check-input isGroupDataMutiLine"
                                        value="0" checked>No
                                </label>
                            </div>
                        </div>

                        <div id="Mutiline_value" class="form-group">
                            <h5>Select Value Of Y</h5>

                            <div class="row">
                                <div class="col-5">
                                    <label for="">Datasource <span class="text-danger">*</span></label>
                                    <select class="form-control select-datasource">

                                    </select>
                                </div>
                            </div>

                            <button class="btn btn-primary btn-sm btn-radius mt-2" id="btn-add-value-Mutiline">
                                <i class="fa fa-plus"></i>
                                Add Line Value Of Y
                            </button>

                            <div class="row">
                                <div class="col-5">
                                    <label for="">Value <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource">
                                    <ul class="list-group data-list">
                                </div>
                                <div class="col-5">
                                    <label for="">Label <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control label-y-chart-line">
                                </div>
                                <div class="col-1">
                                    <label for="">Color <span class="text-danger">*</span></label>
                                    <input type="color" id="rgb" class="form-control rgb-chart-line" value="#f6b73c">
                                </div>
                            </div>
                        </div>

                        <div id="Mutiline_group_data" class="form-group" style="display: none">
                            <h5>Group data</h5>
                            <div class="row form-group group-data">
                                <div class="col-4">
                                    <label for="">Datasource <span class="text-danger">*</span></label>
                                    <select class="form-control select-datasource">

                                    </select>
                                </div>
                                <div class="col-4">
                                    <label>Group data</label>
                                    <input type="text" class="form-control value-group-data">
                                    <ul class="list-group data-list data-list-group">
                                </div>
                                <div class="col-4">
                                    <label for="customRange">Length data</label>
                                    <div id="range_data" class="d-flex justify-content-between">
                                        <input type="number" name="start" id="start" min="0" value="0" class="form-control mr-2">
                                        -
                                        <input type="number" name="end" id="end" min="0" value="0" class="form-control ml-2">
                                    </div>
                                </div>
                            </div>
                            <h5>Select data</h5>
                            <div class="row form-group group-value-lable">
                                <div class="col-6">
                                    <label for="">Value <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource" name="value-data">
                                    <ul class="list-group data-list data-list-value">
                                </div>
                                <div class="col-6">
                                    <label for="">Label <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource" name="label-data">
                                    <ul class="list-group data-list data-list-value">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mutiLine_static" class="value-widget" style="display: none;">

                    </div>

                    <div id="Radar" class="value-widget" style="display:none;">
                        <div class="row">
                            <div class="col-6">
                                <h5>Label Radar</h5>
                                <button class="btn btn-primary btn-sm btn-radius mb-2" id="btn-add-label-radar">
                                    <i class="fa fa-plus"></i>
                                    Add label
                                </button>
                                <button class="btn btn-success btn-sm btn-radius mb-2" id="btn-edit-label-radar" style="display: none">
                                    <i class="fa fa-plus"></i>
                                    Edit label
                                </button>
                                <div id="Radar_label">
                                    <div class="input-group">
                                        <input type="text" class="form-control radar-labels mt-2" value="">
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control radar-labels mt-2" value="">
                                        <div class="input-group-append">
                                            <button class="btn btn-danger mt-2  remove-radar-labels" type="button"><i
                                                    class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control radar-labels mt-2" value="">
                                        <div class="input-group-append">
                                            <button class="btn btn-danger mt-2  remove-radar-labels" type="button"><i
                                                    class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <input type="text" class="form-control radar-labels mt-2" value="">
                                        <div class="input-group-append">
                                            <button class="btn btn-danger mt-2  remove-radar-labels" type="button"><i
                                                    class="fas fa-times"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <h5>Example</h5>
                                <canvas id="example_radar"></canvas>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <h5>Datasource Radar</h5>
                                <button class="btn btn-primary btn-sm btn-radius mb-2" id="btn-add-datasource-radar">
                                    <i class="fa fa-plus"></i>
                                    Add datasource
                                </button>
                                <div id="Radar_value">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="Table" class="value-widget" style="display:none;">
                        <h5>Select Datasource</h5>
                        <div class="row">
                            <div class="col-6">
                                <label for="">Datasource</label>
                                <select class="form-control select-datasource">

                                </select>
                                <div class="mt-2" id="btn-mm-table">
                                    <button type="button" class="btn btn-primary btn-sm btn-radius" id="btn_add_col">Add
                                        column</button>
                                    <button type="button" class="btn btn-danger btn-sm btn-radius" id="btn_remove_col">Remove
                                        column</button>
                                    <button type="button" class="btn btn-primary btn-sm btn-radius" id="btn_add_row">Add
                                        row</button>
                                    <button type="button" class="btn btn-danger btn-sm btn-radius" id="btn_remove_row">Remove
                                        row</button>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <table class="table table-bordered" id="example_table">
                                <thead>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div id="Gauges" class="value-widget" style="display:none;">
                        <div class="row">
                            <div class="col-4">
                                <label>limitMin</label>
                                <input type="number" name="limitMin" id="g_limitMin" class="form-control">
                            </div>

                            <div class="col-4">
                                <label>limitMax</label>
                                <input type="number" name="limitMax" id="g_limitMax" class="form-control">
                            </div>

                            <div class="col-4">
                                <label>Unit</label>
                                <input type="text" name="unit" id="unit" class="form-control">
                            </div>
                        </div>
                        <h5>Select Datasource</h5>
                        <div class="row">
                            <div class="col-6">
                                <label for="">Datasource</label>
                                <select class="form-control select-datasource">

                                </select>
                            </div>
                            <div class="col-6">
                                <label for="">Value</label>
                                <input class="form-control value-datasource">
                                <ul class="list-group data-list">
                            </div>
                        </div>
                    </div>

                    <div id="text-line" class="value-widget" style="display:none;">
                        <div class="row">
                            <div class="col-6">
                                <label>Unit</label>
                                <input type="text" id="unit" class="form-control" />
                            </div>
                            <div class="col-6">
                            </div>
                        </div>
                        <h5>Select Datasource</h5>
                        <div class="row" id="value-text-line">
                            <div class="col-4">
                                <label for="">Datasource</label>
                                <select class="form-control select-datasource">

                                </select>
                            </div>
                            <div class="col-4">
                                <label for="">Value</label>
                                <input class="form-control value-datasource">
                                <ul class="list-group data-list">
                            </div>
                            <div class="col-4">
                                <label for="">RGB</label>
                                <input id="rgb" type="color" class="form-control rgb-chart-line" value="#f6b73c">
                            </div>
                        </div>
                    </div>

                    <div id="TextValue" class="value-widget" style="display:none;">
                        <div class="row">
                            <div class="col-6">
                                <label>Unit</label>
                                <input id="unit" type="text" class="form-control" />
                            </div>
                            <div class="col-6">
                                <label>Color <span class="text-danger">*</span></label>
                                <input id="rgb" type="color" class="form-control" value="#f6b73c">
                            </div>
                        </div>
                        <h5>Select Datasource</h5>
                        <div class="row">
                            <div class="col-6">
                                <label for="">Datasource <span class="text-danger">*</span></label>
                                <select class="form-control select-datasource">

                                </select>
                            </div>
                            <div class="col-6">
                                <label for="">Value <span class="text-danger">*</span></label>
                                <input class="form-control value-datasource">
                                <ul class="list-group data-list">
                            </div>
                        </div>
                    </div>

                    <div id="map" class="value-widget mt-2" style="display:none;">
                        <div class="form-group">
                            <label>Do you want to group data ?</label>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" name="isGroupDataMap" class="form-check-input isGroupDataMap"
                                        value="1">Yes
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="radio" name="isGroupDataMap" class="form-check-input isGroupDataMap"
                                        value="0" checked>No
                                </label>
                            </div>
                        </div>
                        <div id="map_value" class="form-group">
                            <h5>Select value of point in map</h5>

                            <div class="row">
                                <div class="col-5">
                                    <label for="">Datasource <span class="text-danger">*</span></label>
                                    <select class="form-control select-datasource">

                                    </select>
                                </div>
                            </div>

                            <button class="btn btn-primary btn-sm btn-radius mt-2 btn-add-point-map">
                                <i class="fa fa-plus"></i>
                                Add Point
                            </button>

                            <div class="row value-of-map">
                                <div class="col-3">
                                    <label for="">Latitude <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource latitude">
                                    <ul class="list-group data-list">
                                </div>
                                <div class="col-3">
                                    <label for="">Longitude <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource longitude">
                                    <ul class="list-group data-list">
                                </div>
                                <div class="col-3">
                                    <label for="">Value <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control value-datasource value-map">
                                    <ul class="list-group data-list">
                                </div>
                                <div class="col-2">
                                    <label for="">Label <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control label-map">
                                </div>
                            </div>
                        </div>

                        <div id="map_group_data" class="form-group" style="display: none">
                            <h5>Group data</h5>
                            <div class="row form-group group-data">
                                <div class="col-4">
                                    <label for="">Datasource <span class="text-danger">*</span></label>
                                    <select class="form-control select-datasource">

                                    </select>
                                </div>
                                <div class="col-4">
                                    <label>Group data</label>
                                    <input type="text" class="form-control value-group-data">
                                    <ul class="list-group data-list data-list-group">
                                </div>
                                <div class="col-4">
                                    <label for="customRange">Length data</label>
                                    <div id="range_data" class="d-flex justify-content-between">
                                        <input type="number" name="start" id="start" min="0" value="0" class="form-control mr-2">
                                        -
                                        <input type="number" name="end" id="end" min="0" value="0" class="form-control ml-2">
                                    </div>
                                </div>
                            </div>
                            <h5>Select data</h5>
                            <div class="row form-group group-value-lable">
                                <div class="col-3">
                                    <label for="">Latitude <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource" name="latitude">
                                    <ul class="list-group data-list data-list-value">
                                </div>
                                <div class="col-3">
                                    <label for="">Longitude <span class="text-danger">*</span></label>
                                    <input class="form-control value-datasource" name="longitude">
                                    <ul class="list-group data-list data-list-value">
                                </div>
                                <div class="col-3">
                                    <label for="">Value <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control value-datasource" name="value_data">
                                    <ul class="list-group data-list data-list-value">
                                </div>
                                <div class="col-3">
                                    <label for="">Label <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control value-datasource" name="label_data">
                                    <ul class="list-group data-list data-list-value">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success btn-block" id="add-new-widget" style="display:none">Add Widget</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="addDatasource">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">Add Datasource</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-6">
                                <label for="">Name</label>
                                <input type="text" id="name_datasource" class="form-control">
                            </div>
                            <div class="col-6">
                                <label for="">Channel</label>
                                <select name="" id="webservice_id" class="form-control">
                                    <option value="">--Select Channel--</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group" id="form_add_param">
                        <h5>Parameter</h5>
                        <button class="btn btn-primary btn-sm btn-radius" id="btn_add_param">Add parameter</button>
                        <div class="row">
                            <div class="col-5">
                                <label for="">Key</label>
                                <input type="text" id="key" class="form-control">
                            </div>
                            <div class="col-6">
                                <label for="">Channel</label>
                                <input type="text" id="key_value" name="key_value" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <a class="btn btn-success btn-block" id="btn-add-new-datasource" href="#">Save</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="layout_param_add" hidden>
    <div class="row">
        <div class="col-5">
            <label for="">Key</label>
            <input type="text" id="key" class="form-control">
        </div>
        <div class="col-6">
            <label for="">Channel</label>
            <input type="text" id="key_value" name="key_value" class="form-control">
        </div>
        <div class="col-1 d-flex justify-content-center align-items-center" style="margin: auto;margin-top: 45px;">
            <i class="fas fa-trash-alt remove-param"></i>
        </div>
    </div>
</div>

<div id="line_value_layout" hidden>
    <div class="row">
        <div class="col-5">
            <label for="">Value <span class="text-danger">*</span></label>
            <input class="form-control value-datasource">
            <ul class="list-group data-list">
        </div>
        <div class="col-5">
            <label for="">Label <span class="text-danger">*</span></label>
            <input type="text" class="form-control label-y-chart-line">
        </div>
        <div class="col-1">
            <label for="">Color <span class="text-danger">*</span></label>
            <input type="color" id="rgb" class="form-control rgb-chart-line" value="#f6b73c">
        </div>
        <div class="col-1 d-flex justify-content-center align-items-center" style="margin-top:30px">
            <i class="fas fa-trash-alt remove-value"></i>
        </div>
    </div>
</div>

<div id="map_value_layout" hidden>
    <div class="row value-of-map">
        <div class="col-3">
            <label for="">Latitude <span class="text-danger">*</span></label>
            <input class="form-control value-datasource latitude">
            <ul class="list-group data-list">
        </div>
        <div class="col-3">
            <label for="">Longitude <span class="text-danger">*</span></label>
            <input class="form-control value-datasource longitude">
            <ul class="list-group data-list">
        </div>
        <div class="col-3">
            <label for="">Value <span class="text-danger">*</span></label>
            <input type="text" class="form-control value-datasource value-map">
            <ul class="list-group data-list">
        </div>
        <div class="col-2">
            <label for="">Label <span class="text-danger">*</span></label>
            <input type="text" class="form-control label-map">
        </div>
        <div class="col-1 d-flex justify-content-center align-items-center" style="margin-top:30px">
            <i class="fas fa-trash-alt remove-value"></i>
        </div>
    </div>
</div>

<div id="layout-radar-value" hidden>
    <div class="form-radar-value">
        <i class="fas fa-times d-flex justify-content-end remove-datasource-radar"></i>
        <h6>Select Datasource</h6>
        <div class="row">
            <div class="col-4">
                <label for="">Label</label>
                <input type="text" class="form-control label-radar">
            </div>
            <div class="col-4">
                <label for="">Datasource</label>
                <select class="form-control select-datasource">

                </select>
            </div>
            <div class="col-4">
                <label for="">Color</label>
                <input type="color" class="form-control radar-color">
            </div>
        </div>
        <h6>Set Value</h6>
        <div class="row add-value-radar">

        </div>
    </div>
</div>

<div id="layout-add-value-radar" hidden>
    <div class="col-6">
        <label for="">Label</label>
        <input class="form-control label-radar-select" readonly value=((value-radar))>
    </div>
    <div class="col-6">
        <label for="">Value</label>
        <input class="form-control value-datasource">
        <ul class="list-group data-list" style="display: none">
    </div>
</div>

<div id="layout-widget-static" hidden>
    <div>
        <div class="panel grid-stack-item-content" id="div_id" data="((data_widget))">

            <div class="card-header d-flex justify-content-between">
                <div>
                    <h5 class="title-widget">((title_name))</h5>
                </div>
                <div class="edit-widget" style="display:none">
                    <i class="fas fa-cog btn-edit-wi grow" title="Edit widget" item="div_id"></i>
                    <i class="fas fa-trash-alt btn-delete-wi grow" title="Delete widget" item="div_id"></i>
                </div>
                <div class="static-mm">
                    <i class="far fa-clock btn-edit-time grow" title="Time" style="cursor:pointer" item="div_id"></i>
                    <i class="fas fa-arrow-down btn-download grow" title="Download" style="cursor:pointer" item="div_id"></i>
                </div>
            </div>

            <div class="card-body" style="overflow:hidden">
                ((wi))
            </div>
            <div class="card-footer" style="background-color:#FFFF;border-top:0">
                <div class="text-right">
                    <span>{{--Last Update --}}<span id="{last_update}">00:00:00</span></span>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="layout-widget" hidden>
    <div>
        <div class="panel grid-stack-item-content " id="div_id" data="((data_widget))">

            <div class="card-header d-flex justify-content-between">
                <div>
                    <h5><span class="title-widget">((title_name))</span> <span class="badge badge-pill badge-success">Realtime</span></h5>
                    {{-- <span class="switch switch-sm">
                        <input type="checkbox" class="switch" id="<<switch>>">
                        <label for="<<switch>>">Realtime</label>
                    </span> --}}
                </div>
                <div class="edit-widget" style="display:none">
                    <i class="fas fa-cog btn-edit-wi grow" title="Edit widget" item="div_id"></i>
                    <i class="fas fa-trash-alt btn-delete-wi grow" title="Delete widget" item="div_id"></i>
                </div>

                <div class="download" style="display: none">
                    <div class="dropdown">
                        <i class="fas fa-arrow-down grow" data-toggle="dropdown" title="Download"
                            style="cursor:pointer" ></i>
                        <div class="dropdown-menu dropdown-menu-right">
                            <span class="dropdown-item btn-download" item="div_id"><i class="fas fa-image"></i> Download images</span>
                            <span class="dropdown-item btn-download btn-download-excel" item="div_id"><i class="fas fa-file-excel"></i> Download excel</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body" style="overflow:hidden">
                ((wi))
            </div>
            <div class="card-footer" style="background-color:#FFFF;border-top:0">
                <div class="text-right">
                    <span> <i class="fas fa-history btn-time-series grow" title="Time series" style="cursor:pointer"
                            item="div_id"></i> <span id="{last_update}">00:00:00</span></span>
                </div>
                <div class="time-series-static" style=" display: none">
                    <div class="col-4">
                        <input type="date" name="" id="" class="form-control form-control-sm static_date">
                    </div>
                    <div id="<<sliderTime>>" class="ul-slider slider-success mt-4 noUi-target noUi-ltr noUi-horizontal">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="layout-widget-text" hidden>
    <div>
        <div class="panel grid-stack-item-content" id="div_id" data="((data_widget))">
            <div class="panel__header__min ml-auto edit-widget">
                <i class="fas fa-cog btn-edit-wi grow" item="div_id"></i>
                <i class="fas fa-trash-alt btn-delete-wi grow" item="div_id"></i>
            </div>
            <div class="panel__content d-flex align-items-center align-content-center">
                ((wi))
            </div>
        </div>
    </div>
</div>

<div id="layout-widget-text-value" hidden>
    <div>
        <div class="panel grid-stack-item-content" id="div_id" data="((data_widget))">
            <div class="card-header d-flex justify-content-between">
                <div>
                    <h5><span class="title-widget">((title_name))</span> <span class="badge badge-pill badge-success">Realtime</span></h5>
                </div>
                <div class="edit-widget" style="display:none">
                    <i class="fas fa-cog btn-edit-wi grow" title="Edit widget" item="div_id"></i>
                    <i class="fas fa-trash-alt btn-delete-wi grow" title="Delete widget" item="div_id"></i>
                </div>
                {{--
                <div class="full-screen">
                    <i class="fas fa-expand btn-full-screen" title="Full screen" style="cursor:pointer" item="div_id"></i>
                </div> --}}
            </div>

            <div class="card-body d-flex align-items-center align-content-center justify-content-center" style="overflow:hidden">
                ((wi))
            </div>
            <div class="card-footer" style="background-color:#FFFF;border-top:0">
                <div class="text-right">
                    <span>{{--Last Update --}}<span id="{last_update}">00:00:00</span></span>
                </div>
            </div>


        </div>
    </div>
</div>


<div id="layout_widget_static" hidden>
    <div>
        <div class="panel grid-stack-item-content " id="div_id" data="((data_widget))">

            <div class="card-header d-flex justify-content-between">
                <div>
                    <h5><span class="title-widget">((title_name))</span> <span class="badge badge-pill badge-primary">Static</span></h5>
                </div>
                <div class="edit-widget" style="display:none">
                    <i class="fas fa-cog btn-edit-wi grow" title="Edit widget" item="div_id"></i>
                    <i class="fas fa-trash-alt btn-delete-wi grow" title="Delete widget" item="div_id"></i>
                </div>

                <div class="full-screen">
                    <i class="fas fa-file-excel grow" title="Download excel" style="cursor:pointer" item="div_id"></i>
                    <i class="fas fa-arrow-down btn-download grow" title="Download" style="cursor:pointer" item="div_id"></i>
                </div>
            </div>

            <div class="card-body" style="overflow:hidden">
                ((wi))
            </div>
            <div class="card-footer" style="background-color:#FFFF;border-top:0">
                <div class="form-group">
                    <select name="type_report" id="type_report" class="form-control form-control-sm" style="width:20%">
                        <option value="daily">Daily</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>
                <div class="form-inline daily">
                    <label for="start_day" class="mr-sm-2 ">Start day</label>
                    <input type="date" class="form-control form-control-sm mb-2 mr-sm-2 " id="start_day">
                    <label for="end_day " class="mr-sm-2 ">End day</label>
                    <input type="date" class="form-control form-control-sm mb-2 mr-sm-2 " id="end_day">
                </div>
                <div class="form-inline monthly " style="display: none">
                    <label for="start_month " class="mr-sm-2 ">Start month</label>
                    <select name="start_month" id="start_month" class="form-control form-control-sm mb-2 mr-sm-2">
                        <option value="0">-- Select month --</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <label for="end_month" class="mr-sm-2 ">End month</label>
                    <select name="end_month" id="end_month" class="form-control form-control-sm mb-2 mr-sm-2">
                        <option value="0">-- Select month --</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <div class="form-inline yearly" style="display: none">
                    <label for="start_year" class="mr-sm-2 ">Start year</label>
                    <input type="number" class="form-control form-control-sm mb-2 mr-sm-2" id="start_year">
                    <label for="end_year" class="mr-sm-2 ">End year</label>
                    <input type="number" class="form-control form-control-sm mb-2 mr-sm-2" id="end_year">
                </div>
            </div>

        </div>
    </div>
</div>

<span id="static_id" hidden>{{$id}}</span>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js "></script>

<script src="{{asset( 'js/Leaflet.heat-gh-pages/dist/leaflet-heat.js')}} "></script>

<script src="{{asset( 'js/company/gauge/gauge.min.js')}} "></script>

<script src="{{asset( 'js/canvas-toBlob/canvas-toBlob.js')}} "></script>

<script type="text/javascript " src="{{asset( 'js/nouislider/nouislider.min.js')}} "></script>

<script src="{{ mix( '/js/company/static/dashboard.min.js') }} "></script>

<script src="{{ asset( '/js/justgage-1.2.2/justgage.js') }} "></script>
<script src="{{ asset( '/js/justgage-1.2.2/raphael-2.1.4.min.js') }} "></script>

<script type="text/javascript " src="{{asset( 'js/gridstack/gridstack.js')}} "></script>
<script type="text/javascript " src="{{asset( 'js/gridstack/gridstack.jQueryUI.js')}} "></script>

<script type="text/javascript " src="{{asset( 'js/sweetalert/sweetalert.min.js')}} "></script>



<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js "></script>
@endsection
