@extends('layouts.mainCompany') 
@section('title','Admin | Company') 
@section('content')

<style>
    table {
        font-size: 14px;
    }

    .dataTables_wrapper {
        font-size: 12px;
    }
</style>

<link href="{{url('css/loading-text.css')}}" rel="stylesheet" />
<link href="{{url('css/animate.css')}}" rel="stylesheet">
<link href="{{url('css/company.css')}}" rel="stylesheet">

<div class="card bg-white" style="margin-top:30px;">
    <div class="card-header bg-white">
        <div class="row">
            <div class="col-6" style="padding: 30px 0px 10px 15px">
                <h3>Company</h3>
                <div class="text-loading">
                    <div class="text-line md"></div>
                </div>
                <p id="total-company"></p>
            </div>
            <div class="col-6 text-right" style="padding: 30px 15px 10px 0px;width:100%">
                <button type="button" class="btn btn-success btn-radius" id="btn-create">
                    <i class="fa fa-plus"></i>
                    Create
                </button>
            </div>
        </div>
    </div>

    <div class="card-body">
            <table style="width: 100%; display:none" class="table table-striped table-bordered table-hover dt-responsive nowrap" id="datatable-company">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Alias</th>
                        <th>Note</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div class="lds-roller text-center">
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
</div>


<script type="text/javascript" src="{{url('js/admin/Company/company.min.js')}}"></script>
@endsection