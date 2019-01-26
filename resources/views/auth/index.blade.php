@extends('layouts.login') 
@section('content')
<style>
    #form_login {
        width: 35%;
        margin: auto;
        padding: 40px 40px 10px;
        -webkit-box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
        box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
        background: #FFF;
        border-radius: 4px;
    }

    @media screen and (max-width: 850px) {
        #form_login {
            width: 70%;
        }
    }

    @media screen and (max-width: 600px) {
        #form_login {
            width: 100%;
        }
    }

    #btn-close-login {
        transition: 0.3s;
        cursor: pointer;
    }

    #btn-close-login:hover {

        color: #e13130;
    }

    .header {
        text-align: center;
        color: #fff;
        background: linear-gradient(-45deg, #556cdc, #128bfc, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
        position: fixed;
        width: 100vw;
        z-index: 1;
        min-height: 100vh;
        overflow: hidden;
        text-align: center;
        box-sizing: border-box;
    }

    .content-wrapper {
        background-color: #f2f3f9;
        top: 100%;
        position: absolute;
        z-index: 2;
        width: 100%;
        overflow: hidden;
    }

    .login-wrapper {
        color: #000;
        top: 100%;
        background: linear-gradient(-45deg, #556cdc, #128bfc, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
        position: fixed;
        width: 100%;
        z-index: 3;
        height: 100%;
        overflow: hidden;
    }

    #content {
        position: unset !important;
        padding: 0;
    }


    .modal-content {
        border-radius: 15px !important;
    }

    .modal-header {
        border: 0;
    }

    .modal-footer {
        border: 0;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
</style>
<link href="{{url('css/animate.css')}}" rel="stylesheet">
<header class="header">
    <div class="d-flex flex-column justify-content-center align-items-center" id="header" style="margin: 20px;height: 100vh;">
        <h1 class="display-1 animated fadeInDown ">KU CLOUD</h1>
        <h1 class="display-4 animated fadeInUp ">Private cloud for you</h1>
        <i class="fas fa-chevron-down fa-3x mt-5 animated flash"></i>
        <button class="btn btn-success btn-lg btn-radius mt-3 animated fadeIn" id="Login" style="width:50% ">Go to Site</button>
    </div>
</header>



<div class="content-wrapper d-flex flex-column justify-content-around align-items-center">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>ABOUT KU CLOUD</h2>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Lorem ipsum</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla porta mauris et tincidunt. Ut ac viverra mi. Praesent
                                quis vehicula tellus. Proin dapibus ornare orci, sed sollicitudin metus fringilla et. Mauris
                                consectetur ultricies mi non condimentum. Aliquam lacus arcu, ornare a urna vel, sollicitudin
                                tristique lorem. Vestibulum
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Lorem ipsum</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla porta mauris et tincidunt. Ut ac viverra mi. Praesent
                                quis vehicula tellus. Proin dapibus ornare orci, sed sollicitudin metus fringilla et. Mauris
                                consectetur ultricies mi non condimentum. Aliquam lacus arcu, ornare a urna vel, sollicitudin
                                tristique lorem. Vestibulum
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Lorem ipsum</h4>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla porta mauris et tincidunt. Ut ac viverra mi. Praesent
                                quis vehicula tellus. Proin dapibus ornare orci, sed sollicitudin metus fringilla et. Mauris
                                consectetur ultricies mi non condimentum. Aliquam lacus arcu, ornare a urna vel, sollicitudin
                                tristique lorem. Vestibulum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>

<div class="login-wrapper">
    <div class="d-flex flex-column justify-content-center align-items-center " style="margin: 20px;height: 100vh;">
        <form id="form_login">
            <i class="fas fa-times fa-1x" style="float:right" id="btn-close-login"></i>
            <div class="alert alert-danger" style="display:none">
            </div>

            <label>Username</label>
            <input type="text" class="form-control" id="email" placeholder="Username">
            <label>Password</label>
            <input type="password" class="form-control" id="pwd" placeholder="******">
            <button class="btn btn-success btn-block btn-radius mt-3" id="btn-submit-login">Login</button>
            <div class="form-group d-flex justify-content-center mt-3 my-2">
                <a href="{{action('AuthController@forgetPassword')}}" class="text-small forgot-password text-black">Forgot Password</a>

            </div>
            <div class="text-block text-center my-3">
                <span class="text-small font-weight-semibold">Not a member ?</span>
                <a href="{{action('RegisterController@index')}}" class="text-black text-small">Create new account</a>
            </div>
        </form>
    </div>
</div>



<script>
    $(document).ready(function () {
        // let height = $(window).height();
        // $("#header").height(height);

        // $(window).resize(function () {
        //     $("#header").height(height);
        // });

        $("#Login").click(function () {
            $(".login-wrapper").animate({ "top": "0" })
            $("#d-flex-login").animate({ "height": height })
        });

        $("#btn-close-login").click(function () {
            $(".login-wrapper").animate({ "top": "100%" })
        })

        $('#btn-submit-login').click(function () {
            event.preventDefault();
            $.ajax({
                url: "http://localhost:8000/api/Auth/Login",
                method: "POST",
                dataType: "json",
                data: {
                    email: $("#email").val(),
                    password: $("#pwd").val()
                },
                success: (res) => {
                    setCookie("token", res.token);
                    window.location = res.path;
                },
                error: (res) => {
                    if (res.status === 500) {
                        $(".alert ").show();
                        $(".alert ").html("<strong>Error!</strong> Please check email " + $("#email").val() + " to verify.");
                    }
                }
            });
        })

        $("input,button").focus(function () { $(".alert").hide(); });
    });

</script>
@endsection