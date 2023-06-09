@extends('layouts.login') 
@section('content')
<style>
    body {
        background: #A1FFCE;
        /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #FAFFD1, #A1FFCE);
        /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #FAFFD1, #A1FFCE);
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .form-register {
        width: 30%;
        margin-bottom: 15px;
        -webkit-box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
        box-shadow: 0px 1px 15px 1px rgba(69, 65, 78, 0.08);
        background: #FFF;
        border-radius: 4px;
    }

    @media screen and (max-width: 850px) {
        .form-register {
            width: 70%;
        }
    }

    @media screen and (max-width: 600px) {
        .form-register {
            width: 100%;
        }
    }

    .content {
        padding: 30px 10px 30px 30px;
    }

    .input-data {
        padding: 20px;
        padding-top: 0px;
    }

    .swal-modal {
        width: 580px;
    }



</style>

<link href="{{url('css/register.css')}}" rel="stylesheet">


<div class="content d-flex flex-column justify-content-center align-items-center" style="width: 100%;height: 100vh;">
    <div class="modal fade" id="model_body_register">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content" style="box-shadow: 0px 0px 20px 9px rgba(0, 0, 0, 0.13);">

                <div class="modal-header">
                    <h3 class="modal-title">Register</h3>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                    <form id="form_register" autocomplete="nope">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-5 col-11 header-line">
                                    <span class="header-title">Account detail</span>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="account">Username <span class="text-danger">*</span></label>
                                            <input type="text" name="username" class="form-control" id="accountname">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="password">Password <span class="text-danger">*</span></label>
                                            <input type="password" name="password" class="form-control" id="password" autocomplete="new-password">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="confirmPassword">Confirm password <span class="text-danger">*</span></label>
                                            <input type="password" name="confirmPassword" class="form-control" id="confirmPassword">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-11 header-line">
                                    <span class="header-title">Profile detail</span>
                                    <div class="row">
                                        <div class="col-xl-6 col-12 mt-2">
                                            <label for="firstname">Firstname <span class="text-danger">*</span></label>
                                            <input type="text" name="firstname" class="form-control" id="fname">
                                            <small class="messages-error"></small>
                                        </div>
                                        <div class="col-xl-6 col-12 mt-2">
                                            <label for="lname">Lastname <span class="text-danger">*</span></label>
                                            <input type="text" name="lastname" class="form-control" id="lname">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="email">Email address <span class="text-danger">*</span></label>
                                            <input type="email" name="email" class="form-control" id="email" autocomplete="nope">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="phone">Phone <span class="text-danger">*</span></label>
                                            <input type="text" name="phone" class="form-control" id="phone">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-left">
                                <div class="col-xl-11 col-11" style="padding-left: 4%;">
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="checkbox_address" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <label class="custom-control-label" for="checkbox_address">Include address detail, You can change address detail it later</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center collapse" id="collapseExample">
                                <div class="col-11 header-line">
                                    <span class="header-title">Address detail</span>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="address">Address <span class="text-danger">*</span></label>
                                            <textarea name="address_detail" id="address_detail" cols="30" rows="5" class="form-control"></textarea>
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="province">Province <span class="text-danger">*</span></label>
                                            <select name="province" id="province" class="form-control">
                                                <option value="">--Select provice--</option>
                                            </select>
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 mt-2">
                                            <label for="amphure">Amphure <span class="text-danger">*</span></label>
                                            <select name="amphure" id="amphure" class="form-control">
                                                <option value="">--Select amphure--</option>
                                            </select>
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6 col-12 mt-2">
                                            <label for="district">District <span class="text-danger">*</span></label>
                                            <select name="district" id="district" class="form-control">
                                                <option value="">--Select district--</option>
                                            </select>
                                            <small class="messages-error"></small>
                                        </div>
                                        <div class="col-xl-6 col-12 mt-2">
                                            <label for="zip_code">Zip code <span class="text-danger">*</span></label>
                                            <input name="zip_code" id="zip_code" class="form-control">
                                            <small class="messages-error"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <button class="btn btn-success btn-block btn-radius" id="btn_register" data-loading-text="Create my account <i class='fas fa-circle-notch fa-spin'></i>">Create
                        your account
                    </button>
                </div>

            </div>
        </div>
    </div>
</div>

<!-- validate -->
<script src="{{asset('js/validate/validate.js')}}"></script>
<script type="text/javascript " src="{{url( 'js/sweetalert/sweetalert.min.js')}} "></script>
<script src="{{asset('js/account/register.min.js')}}"></script>

<script>

</script>
@endsection