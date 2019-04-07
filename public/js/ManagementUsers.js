/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 625);
/******/ })
/************************************************************************/
/******/ ({

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementUsers", function() { return ManagementUsers; });
/* harmony export (immutable) */ __webpack_exports__["FatoryCreateManagmentUser"] = FatoryCreateManagmentUser;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utility__ = __webpack_require__(5);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}



var language = {
    "sProcessing": "<div class=\"lds-roller text-center\">\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                        <div></div>\n                    </div>",
    "oPaginate": {
        "sNext": "<i class='mdi mdi-chevron-right'></i>",
        "sPrevious": "<i class='mdi mdi-chevron-left'></i>"
    }
};

var modalCreate = null;
var modalDetail = null;
var modalEdit = null;
var modalBlock = null;
var modalDelete = null;

var FormAddEmail = "\n                    <div class=\"input-group\">\n                        <input type=\"text\" name=\"email\" class=\"add_email_val form-control mt-2\" value={email}  disabled>\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-danger mt-2 btn-delete-email\" type=\"button\"><i class=\"fas fa-times\"></i></button>  \n                            </div>\n                    </div>\n                    ";
var FormAddPhone = " \n                    <div class=\"input-group\">\n                        <input type=\"text\" name=\"phone\" class=\"add_phone_val form-control mt-2\" value={phone}  disabled>\n                        <div class=\"input-group-append\">\n                            <button class=\"btn btn-danger mt-2 btn-delete-phone\" type=\"button\"><i class=\"fas fa-times\"></i></button>  \n                        </div>\n                    </div>";

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

validate.validators.presence.message = "is required";

var validateInput = {
    bindUser: {
        parent: "form#form_bind_user",
        validate: {
            email: {
                presence: {
                    allowEmpty: false
                }
            }
        }
    },
    create: {
        parent: "form#form-add-user",
        validate: {
            email: {
                presence: true,
                email: true
            },
            username: {
                presence: {
                    allowEmpty: false
                },
                format: {
                    pattern: "[a-zA-Z0-9]+",
                    flags: "i",
                    message: "can only contain a-Z and 0-9"
                },
                length: {
                    minimum: 5,
                    message: "must be at least 5 characters"
                }
            },
            firstname: {
                presence: {
                    allowEmpty: false
                },
                length: {
                    maximum: 50
                }
            },
            lastname: {
                presence: {
                    allowEmpty: false
                },
                length: {
                    maximum: 50
                }
            },
            phone: {
                presence: {
                    allowEmpty: false
                },
                format: {
                    pattern: "[0-9]+",
                    flags: "i",
                    message: "can only contain 0-9"
                },
                length: {
                    minimum: 10,
                    maximum: 10
                }
            }
        }
    },
    edit: {
        parent: "form#form-edit-user",
        validate: {
            email: {
                email: true
            },
            firstname: {
                presence: {
                    allowEmpty: false
                },
                length: {
                    maximum: 50
                }
            },
            lastname: {
                presence: {
                    allowEmpty: false
                },
                length: {
                    maximum: 50
                }
            },
            phone: {
                format: {
                    pattern: "[0-9]+",
                    flags: "i",
                    message: "can only contain 0-9"
                },
                length: {
                    minimum: 10,
                    maximum: 10
                }
            }
        }
    }
};

var ModalCreate = function ModalCreate(config) {
    _classCallCheck(this, ModalCreate);

    if (modalCreate) {
        return modalCreate;
    }

    this.resetModal = function () {
        $("#add_email_val").val('');
        $("#add_fname_val").val('');
        $("#add_phone_val").val('');
        $("#add_pwd_val").val('');
        $("#add_lname_val").val('');
    };
};

var ModalDetail = function ModalDetail(config) {
    _classCallCheck(this, ModalDetail);

    if (modalDetail) {
        return modalDetail;
    }

    this.create = function (key) {
        if ($("#detailUser").length === 0) {
            var modal = "\n                                <div class=\"modal fade\" id=\"detailUser\">\n                                    <div class=\"modal-dialog modal-lg\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title\" id=\"title-user\"></h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                            </div>\n        \n                                            <div class=\"modal-body\">\n                                                <div class=\"container\">\n                                                    <div class=\"row\">\n                                                        <div class=\"col-12 mt-2\">\n                                                            <label for=\"\">Username</label>\n                                                            <input type=\"text\" class=\"form-control\" id=\"detail_username_val\" readonly/>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col-xl-6 col-12 mt-2\">\n                                                            <label for=\"\">Firstname</label>\n                                                            <input type=\"text\" class=\"form-control\" id=\"detail_fname_val\" readonly/>\n                                                        </div>\n                                                        <div class=\"col-xl-6 col-12 mt-2\">\n                                                            <label for=\"\">Lastname</label>\n                                                            <input type=\"text\" class=\"form-control\" id=\"detail_lname_val\" readonly/>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"row\">\n                                                        <div class=\"col-xl-6 col-12 mt-2\">\n                                                            <label for=\"\">Phone</label>\n                                                            <ul class=\"list-group\" id=\"phone-user\">\n                                                            </ul>\n                                                        </div>\n                                                        <div class=\"col-xl-6 col-12 mt-2\">\n                                                            <label for=\"\">Email</label>\n                                                            <ul class=\"list-group\" id=\"email-user\">                    \n                                                            </ul>\n                                                        </div>\n                                                    </div>\n                                                    <div id=\"address_detail_list\">    \n                                                    </div>\n                                                    <div id=\"detail_type_company\">\n                                                    </div>   \n                                                </div>\n                                            </div>\n   \n                                            <div class=\"modal-footer\">\n                                                \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                  ";
            $('body').append(modal);
        }

        if (config.type === 'COMPANY') {
            $('.modal-title').html("Company User Detail");

            $("#detail_type_company").html("\n                    <div class=\"row\">\n                        <div class=\"col-12 mt-2\">\n                            <label for=\"\">Type User</label>\n                            <input type=\"text\" class=\"form-control\" id=\"detail_type_user_val\" readonly/>\n                        </div>\n                    </div>\n                ");

            $('#detail_type_user_val').val(UsersList[key].sub_type_user);
        } else if (config.type === 'CUSTOMER') {
            $('.modal-title').html("Customer User Detail");

            $("#address_detail_list").html('');
            for (var i = 0; i < UsersList[key].address.length; i++) {
                $("#address_detail_list").append("\n                        <div class=\"row\">\n                            <div class=\"col-12 mt-2\">\n                                <label for=\"address\">Address detail " + (i + 1) + "</label>\n                                <textarea name=\"address_detail\" cols=\"30\" rows=\"5\" class=\"form-control\" readonly>" + UsersList[key].address[i].address_detail + "</textarea>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12 mt-2\">\n                                <label for=\"province\">Province</label>\n                                <input type=\"text\" class=\"form-control\"  value=\"" + UsersList[key].address[i].pNameTh + "\" readonly/>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12 mt-2\">\n                                <label for=\"amphure\">Amphure</label>\n                                <input type=\"text\" class=\"form-control\"  value=\"" + UsersList[key].address[i].aNameTh + "\" readonly/>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-xl-6 col-12 mt-2\">\n                                <label for=\"district\">District</label>\n                                <input type=\"text\" class=\"form-control\"  value=\"" + UsersList[key].address[i].dNameTh + "\" readonly/>\n                            </div>\n                            <div class=\"col-xl-6 col-12 mt-2\">\n                                <label for=\"zip_code\">Zip code</label>\n                                <input name=\"zip_code\"  value=\"" + UsersList[key].address[i].zip_code + "\" class=\"form-control\" readonly/>\n                            </div>\n                        </div>\n                    ");
            }
        }

        $('#detail_username_val').val(UsersList[key].username);
        $('#detail_fname_val').val(UsersList[key].fname);
        $('#detail_lname_val').val(UsersList[key].lname);

        var status = "";
        var phone_list = UsersList[key].phone.map(function (data) {
            status = "";
            if (data.is_primary) {
                status = "<span class=\"badge badge-pill badge-primary d-flex justify-content-center align-items-center\">Primary</span>";
            }
            if (data.is_verify) {
                status += "<span class=\"badge badge-pill badge-success d-flex justify-content-center align-items-center\">Verify success</span>";
            } else {
                status += "<span class=\"badge badge-pill badge-danger d-flex justify-content-center align-items-center\">Verify not success</span>";
            }
            return "<li class=\"list-group-item mt-1\" style=\"padding:.375rem .75rem;\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                " + data.phone_user + " \n                                </div>\n                                <div class=\"col-6 d-flex justify-content-end\">\n                                " + status + "\n                                </div>\n                            </div>\n                        </li>";
        });

        $('#phone-user').html(phone_list.join(''));
        var email_list = UsersList[key].email.map(function (data) {
            status = "";
            if (data.is_primary) {
                status += "<span class=\"badge badge-pill badge-primary d-flex justify-content-center align-items-center\">Primary</span>";
            }
            if (data.is_verify) {
                status += "<span class=\"badge badge-pill badge-success d-flex justify-content-center align-items-center\">Verify success</span>";
            } else {
                status += "<span class=\"badge badge-pill badge-danger d-flex justify-content-center align-items-center\">Verify not success</span>";
            }
            return "<li class=\"list-group-item mt-1\" style=\"padding:.375rem .75rem;\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                " + data.email_user + " \n                                </div>\n                                <div class=\"col-6 d-flex justify-content-end\">\n                                " + status + "\n                                </div>\n                            </div>\n                        </li>";
        });
        $('#email-user').html(email_list.join(''));

        $("#detailUser").modal('show');
    };
};

var ModalEdit = function ModalEdit(config) {
    _classCallCheck(this, ModalEdit);

    var count_phone = 0;
    var count_email = 0;

    if (modalEdit) {
        return modalEdit;
    }

    this.create = function (key) {
        if ($("#editUser").length === 0) {
            var modal = "\n                <div class=\"modal fade\" id=\"editUser\">\n                    <div class=\"modal-dialog modal-lg\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h4 class=\"modal-title\" id=\"title-user\"></h4>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n\n                            <div class=\"modal-body\">\n                                <form id=\"form-edit-user\">\n                                    <div class=\"container\">\n                                        <div class=\"row\">\n                                            <div class=\"col-12 mt-2\">\n                                                <label for=\"\">Username</label>\n                                                <input type=\"text\" class=\"form-control\" name=\"username\" id=\"edit-username\"/>\n                                                <small class=\"messages-error\"></small>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-xl-6 col-12 mt-2\">\n                                                <label for=\"\">Firstname</label>\n                                                <input type=\"text\" class=\"form-control\" name=\"firstname\" id=\"edit-fname\"/>\n                                                <small class=\"messages-error\"></small>\n                                            </div>\n                                            <div class=\"col-xl-6 col-12 mt-2\">\n                                                <label for=\"\">Lastname</label>\n                                                <input type=\"text\" class=\"form-control\" name=\"lastname\" id=\"edit-lname\"/>\n                                                <small class=\"messages-error\"></small>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-xl-6 col-12 mt-2\">\n                                                <label for=\"\">Phone </label>\n                                                <button class=\"btn btn-primary btn-sm btn-radius\" id=\"btn-add-phone\"><i class=\"fas fa-plus\"></i> add phone</button>\n                                                <div id=\"input-add-phone\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-xl-6 col-12 mt-2\">\n                                                <label for=\"\">Email </label>\n                                                <button class=\"btn btn-primary btn-sm btn-radius\" id=\"btn-add-email\"><i class=\"fas fa-plus\"></i> add email</button>\n                                                <div id=\"input-add-email\">\n                                                </div>\n                                            </div>\n                                        </div> \n                                        <div id=\"detail_type_company\">\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" id=\"btn-edit-submit\" class=\"btn btn-success btn-block btn-submit-edit\" data-loading-text=\"<i class='fas fa-circle-notch fa-spin'></i> Saving . . .\">Save</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>";
            $('body').append(modal);

            Object(__WEBPACK_IMPORTED_MODULE_1__utility__["b" /* addEventValidate */])(validateInput.edit);
        }

        count_phone = 0;
        count_email = 0;

        $("#btn-edit-submit").unbind().click(function () {
            onSubmitEditClick(key);
        });

        if (config.type === 'COMPANY') {
            $('.modal-title').html("Edit Company User");

            $("#detail_type_company").html("\n                    <div class=\"row\">\n                        <div class=\"col-12 mt-2\">\n                            <label for=\"\">Type User</label>\n                            <select id=\"edit_type_user_val\" class=\"form-control\">\n                                <option>ADMIN</option>\n                                <option selected>CUSTOMER SUPPORT</option>\n                            </select>\n                        </div>\n                    </div>\n                ");

            $('#edit_type_user_val').val(UsersList[key].sub_type_user);
        } else if (config.type === 'CUSTOMER') {
            $('.modal-title').html("Edit Customer User");
        }

        var phoneList = UsersList[key].phone;
        count_phone = phoneList.length;
        var inputPhone = null;
        inputPhone = phoneList.map(function (phone, index) {
            if (phone.is_primary) {
                return "<li class=\"list-group-item mt-1\" style=\"padding:.375rem .75rem;\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                    " + phone.phone_user + " \n                                    </div>\n                                    <div class=\"col-6 d-flex justify-content-end\">\n                                        <span class=\"badge badge-pill badge-primary d-flex justify-content-center align-items-center\">Primary</span>\n                                    </div>\n                                </div>\n                            </li>";
            }
            return "<li class=\"list-group-item mt-1\" id=\"phone-" + phone.phone_user + "\" style=\"padding:.375rem .75rem;\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                " + phone.phone_user + " \n                                </div>\n                                <div class=\"col-6 d-flex justify-content-end\">\n                                    <div class=\"form-submit-delete-phone\" style=\"display:none\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm btn-radius btn-submit-delete-phone\" phone=\"" + phone.phone_user + "\">\n                                            <i class=\"fas fa-check\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-danger btn-sm btn-radius btn-cancel-delete-phone\">\n                                            <i class=\"fas fa-times\"></i>\n                                        </button>\n                                    </div>\n                                    <i class=\"far fa-trash-alt btn-confirm-delete-phone\" style=\"color:#e65251;cursor:pointer\"></i>\n                                </div>\n                            </div>\n                        </li>";
            //return FormAddPhone.replace('{phone}', phone.phone_user);
        });

        var emailList = UsersList[key].email;
        count_email = emailList.length;
        var inputEmail = null;
        inputEmail = emailList.map(function (email, index) {
            if (email.is_primary) {
                return "<li class=\"list-group-item mt-1\"  style=\"padding:.375rem .75rem;\">\n                                <div class=\"row\">\n                                    <div class=\"col-6\">\n                                    " + email.email_user + " \n                                    </div>\n                                    <div class=\"col-6 d-flex justify-content-end\">\n                                        <span class=\"badge badge-pill badge-primary d-flex justify-content-center align-items-center\">Primary</span>\n                                    </div>\n                                </div>\n                            </li>";
            }
            return "<li class=\"list-group-item mt-1\" id=\"email-" + index + "\" style=\"padding:.375rem .75rem;\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                " + email.email_user + " \n                                </div>\n                                <div class=\"col-6 d-flex justify-content-end\">\n                                    <div class=\"form-submit-delete-email\" style=\"display:none\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm btn-radius btn-submit-delete-email\" email=\"" + email.email_user + "\" item=\"email-" + index + "\">\n                                            <i class=\"fas fa-check\"></i>\n                                        </button>\n                                        <button type=\"button\" class=\"btn btn-danger btn-sm btn-radius btn-cancel-delete-email\">\n                                            <i class=\"fas fa-times\"></i>\n                                        </button>\n                                    </div>\n                                    <i class=\"far fa-trash-alt btn-confirm-delete-email\" style=\"color:#e65251;cursor:pointer\"></i>\n                                </div>\n                            </div>\n                        </li>";
            //return FormAddEmail.replace('{email}', email.email_user);
        });

        $("#btn-add-phone").unbind().click(function () {
            event.preventDefault();
            var addPhone = FormAddPhone.replace('disabled', '');
            addPhone = addPhone.replace('{phone}', '');
            if (count_phone <= 2) {
                count_phone++;
                $("#input-add-phone").append(addPhone);
            }
            Object(__WEBPACK_IMPORTED_MODULE_1__utility__["b" /* addEventValidate */])(validateInput.edit);
        });

        $("#btn-add-email").unbind().click(function () {
            event.preventDefault();
            var addEmail = FormAddEmail.replace('disabled', '');
            addEmail = addEmail.replace('{email}', '');
            if (count_email <= 2) {
                count_email++;
                $("#input-add-email").append(addEmail);
            }
            Object(__WEBPACK_IMPORTED_MODULE_1__utility__["b" /* addEventValidate */])(validateInput.edit);
        });

        $('body').unbind().on('click', ".btn-delete-email ,.btn-delete-phone", function () {
            if ($(this).hasClass('btn-delete-email')) {
                --count_email;
            } else if ($(this).hasClass('btn-delete-phone')) {
                --count_phone;
            }
            $(this).parent().parent().remove();
        });

        $('#edit-username').val(UsersList[key].username);
        $('#edit-fname').val(UsersList[key].fname);
        $('#edit-lname').val(UsersList[key].lname);
        $('#input-add-phone').html(inputPhone.join(''));
        $('#input-add-email').html(inputEmail.join(''));

        $('#editUser').modal('show');
        Object(__WEBPACK_IMPORTED_MODULE_1__utility__["k" /* resetInputValidate */])();

        $(".btn-confirm-delete-email").unbind().click(function () {
            $(this).hide();
            $(this).parent().find('.form-submit-delete-email').show();
        });

        $(".btn-cancel-delete-email").unbind().click(function () {
            $(this).parent().hide();
            $(this).parent().parent().find('.btn-confirm-delete-email').show();
        });

        $(".btn-submit-delete-email").unbind().click(function () {
            onSubmitDeleteEmail($(this).attr('email'), $(this).attr('item'));
        });

        $(".btn-confirm-delete-phone").unbind().click(function () {
            $(this).hide();
            $(this).parent().find('.form-submit-delete-phone').show();
        });

        $(".btn-cancel-delete-phone").unbind().click(function () {
            $(this).parent().hide();
            $(this).parent().parent().find('.btn-confirm-delete-phone').show();
        });

        $(".btn-submit-delete-phone").unbind().click(function () {
            onSubmitDeletePhone($(this).attr('phone'));
        });
    };

    var onSubmitDeleteEmail = function onSubmitDeleteEmail(email, item) {
        $.ajax({
            url: END_POINT + "company/users/email",
            method: "DELETE",
            headers: {
                authorization: 'bearer ' + getCookie('token')
            },
            data: {
                email_user: email
            },
            success: function success(res, textStatus, xhr) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                $("#" + item).remove();
                ManagementUsers.refreshData();
            },
            error: function error(res) {
                console.log(res);
            }

        });
    };

    var onSubmitDeletePhone = function onSubmitDeletePhone(phone) {
        $.ajax({
            url: END_POINT + "company/users/phone",
            method: "DELETE",
            headers: {
                authorization: 'bearer ' + getCookie('token')
            },
            data: {
                phone_user: phone
            },
            success: function success(res, textStatus, xhr) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                $("#phone-" + phone).remove();
                ManagementUsers.refreshData();
            },
            error: function error(res) {
                console.log(res);
            }

        });
    };

    var onSubmitEditClick = function onSubmitEditClick(index) {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["d" /* checkError */])(validateInput.edit)) return;
        __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].set($("#btn-edit-submit"));

        var username = $("#edit-username").val();
        var fname = $("#edit-fname").val();
        var lname = $("#edit-lname").val();
        var phone = $(".add_phone_val:enabled").map(function () {
            if ($(this).val().replace(' ', '') != '') {
                return $(this).val();
            }
        }).get();
        var email = $(".add_email_val:enabled").map(function () {
            if ($(this).val().replace(' ', '') != '') {
                return $(this).val();
            }
        }).get();

        var sub_type_user = null;

        if (UsersList[index].type_user === 'COMPANY') {
            sub_type_user = $("#edit_type_user_val").val();
        }
        console.log(sub_type_user);
        $.ajax({
            url: END_POINT + config.edit,
            method: "PUT",
            headers: {
                authorization: 'bearer ' + getCookie('token')
            },
            data: {
                user_id: UsersList[index].user_id,
                username: username,
                fname: fname,
                lname: lname,
                phone_user: phone,
                email_user: email,
                sub_type_user: sub_type_user,
                type_user: UsersList[index].type_user
            },
            success: function success(res, textStatus, xhr) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                toastr["success"]("Success");
                __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset($("#btn-edit-submit"));
                $("#editUser").modal('hide');
                ManagementUsers.refreshData();
            },
            error: function error(res) {
                __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset($("#btn-edit-submit"));
                console.log(res);
            }
        });
    };
};

var ModalToggleActive = function ModalToggleActive(config) {
    _classCallCheck(this, ModalToggleActive);

    if (modalBlock) {
        return modalBlock;
    }

    this.create = function (key) {
        if ($("#BlockUser").length === 0) {
            var modal = "\n                <div class=\"modal fade\" id=\"BlockUser\">\n                    <div class=\"modal-dialog modal-lg\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <h4 class=\"modal-title\" id=\"title-block\">Block </h4>\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div>\n\n                            <div class=\"modal-body\">\n                                <form id=\"form-block-user\">\n                                    <h6 id=\"span-text-confirm-block\"></h6>\n                                </form>\n                            </div>\n\n                            <div class=\"modal-footer\" id=\"btn-toggle-active-footer\">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>";

            $('body').append(modal);
        }
        var active = UsersList[key].block ? 'unblock' : 'block';
        $("#title-block").html(active + " User");
        if (UsersList[key].block) {
            $("#btn-toggle-active-footer").html("<button type=\"button\" id=\"btn-toggle-active-submit\" class=\"btn btn-info btn-block\" data-loading-text=\"<i class='fas fa-circle-notch fa-spin'></i> Saving . . .\">UnBlock</button>");
        } else {
            $("#btn-toggle-active-footer").html("<button type=\"button\" id=\"btn-toggle-active-submit\" class=\"btn btn-danger btn-block\" data-loading-text=\"<i class='fas fa-circle-notch fa-spin'></i> Saving . . .\">Block</button>");
        }

        $('#btn-toggle-active-submit').unbind().click(function () {
            onSubmitToggleActiveUser(key);
        });

        $("#span-text-confirm-block").html("Are you sure to " + active + " this account name : " + UsersList[key].fname + " " + UsersList[key].lname + " ?");
        $("#BlockUser").modal('show');
    };

    var onSubmitToggleActiveUser = function onSubmitToggleActiveUser(key) {
        __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].set($("#btn-toggle-active-submit"));
        $.ajax({
            url: END_POINT + config.block,
            method: "put",
            headers: {
                authorization: 'bearer ' + getCookie('token')
            },
            data: {
                user_id: UsersList[key].user_id,
                block: UsersList[key].block ? 0 : 1
            },
            success: function success(res, textStatus, xhr) {
                Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                toastr["success"]("Success");
                $("#BlockUser").modal('hide');
                __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset($("#btn-toggle-active-submit"));
                ManagementUsers.refreshData();
            },
            error: function error(res) {
                __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset($("#btn-toggle-active-submit"));
                console.log(res);
            }
        });
    };
};

var ModalDelete = function ModalDelete(config) {
    _classCallCheck(this, ModalDelete);

    if (modalDelete) {
        return modalDelete;
    }

    this.create = function (key) {
        if ($("#DeleteUser").length === 0) {
            var modal = "<div class=\"modal fade\" id=\"DeleteUser\">\n                                <div class=\"modal-dialog modal-lg\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h4 class=\"modal-title\">Delete User Company</h4>\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                        </div>\n    \n                                        <div class=\"modal-body\">\n                                            <form id=\"form-delete-user\">\n                                                <h6 id=\"span-text-confirm\"></h6>\n                                            </form>\n                                        </div>\n    \n                                        <div class=\"modal-footer\">\n                                            <button type=\"button\" id=\"btn-delete-submit\" class=\"btn btn-danger btn-block\" data-loading-text=\"<i class='fas fa-circle-notch fa-spin'></i> Saving . . .\">Delete</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>";
            $("body").append(modal);
        }
        $('#span-text-confirm').html("Are you sure to delete this account name : " + UsersList[key].email[0].email_user + " ? ");
        $('#DeleteUser').modal('show');
    };
};

var UsersList = [];

var ManagementUsers = function () {
    function ManagementUsers(config) {
        var _this = this;

        _classCallCheck(this, ManagementUsers);

        this.config = {
            getUsers: config.getUsers,
            getOnlineUsers: config.OnlineUsers,
            create: config.create,
            edit: config.edit,
            block: config.block,
            unblock: config.unblock,
            delete: config.delete,
            type: config.type
        };

        var ModalDeleteEmail = null;
        var ModalDeletePhone = null;

        var UsersDATATABLE = null;

        var input_bind_email = null;

        var initialDatatable = function initialDatatable() {
            if (UsersDATATABLE !== null) {
                return false;
            }

            UsersDATATABLE = $('#example').dataTable({
                autoWidth: true,
                responsive: true
            });
        };

        var showDatatableLoadingStatus = function showDatatableLoadingStatus(showOrHide) {
            if (showOrHide) {
                $(".dataTables_wrapper").hide();
                $('#example').hide();
                $('#loading').show();
                $('#card_table').height('100px');
            } else {
                $('#card_table').height('auto');
                $(".dataTables_wrapper").show();
                $('#loading').hide();
                $('.text-loading').hide();
                $('#example').show();
                $('.text-static').show();
            }
        };

        var createTableUsersCompany = function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
                var page;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (UsersDATATABLE != null) {
                                    page = UsersDATATABLE.page.info().page;

                                    UsersDATATABLE.ajax.reload();
                                    UsersDATATABLE.page(page).draw('page');
                                } else {
                                    UsersDATATABLE = $('#example').on('xhr.dt', function (e, settings, json, xhr) {
                                        Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                                    }).DataTable({
                                        "processing": true,
                                        "serverSide": true,
                                        "destroy": true,
                                        "responsive": true,
                                        "language": language,
                                        "ajax": {
                                            url: END_POINT + config.getUsers,
                                            headers: {
                                                authorization: 'bearer ' + getCookie('token')
                                            },
                                            "dataSrc": function dataSrc(json) {
                                                UsersList = json.data;
                                                return json.data;
                                            }
                                        },
                                        "columns": [{
                                            "mRender": function mRender(data, type, row) {
                                                return row.fname + " " + row.lname;
                                            }
                                        }, {
                                            "mRender": function mRender(data, type, row) {
                                                return row.phone[0].phone_user;
                                            }
                                        }, {
                                            "mRender": function mRender(data, type, row) {
                                                return row.email[0].email_user;
                                            }

                                        }, {
                                            "mData": "block",
                                            "mRender": function mRender(data, type, row) {
                                                return data ? '<b class="text-danger">Block</b>' : 'Unblock';
                                            }
                                        }, {
                                            data: 'sub_type_user'
                                        }, {
                                            "mData": "online",
                                            "mRender": function mRender(data, type, row) {
                                                return data ? '<b class="text-success">online <i class="fas fa-circle text-success fa-xs"></i></b>' : '<span class="text-secondary">offline <i class="fas fa-circle text-secondary fa-xs"></i></span>';
                                            }
                                        }, {
                                            "mRender": function mRender(data, type, row, index) {
                                                var btnBlock = "                            \n                            <button type=\"button\" class=\"btn btn-secondary btn-sm btn-block-user\" index=" + index.row + " data-toggle=\"tooltip\" data-placement=\"top\" title=\"Block\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>";
                                                if (row.block) {
                                                    btnBlock = "                            \n                                <button type=\"button\" class=\"btn btn-secondary btn-sm btn-block-user\" index=" + index.row + " data-toggle=\"tooltip\" data-placement=\"top\" title=\"UnBlock\">\n                                    <i class=\"fas fa-unlock\"></i>\n                                </button>";
                                                }
                                                return "<center>\n                                            <button type=\"button\" class=\"btn btn-primary btn-sm btn-detail\" index=" + index.row + " data-toggle=\"tooltip\"\n                                                data-placement=\"top\" title=\"Detail\">\n                                                <i class=\"fas fa-list\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-success btn-sm btn-edit\" index=" + index.row + "  data-toggle=\"tooltip\"\n                                                data-placement=\"top\" title=\"Edit\">\n                                                <i class=\"fas fa-edit\"></i>\n                                            </button>\n                                            " + btnBlock + "\n                                            <button type=\"button\" class=\"btn btn-danger btn-sm btn-delete\"  index=" + index.row + "  data-toggle=\"tooltip\"\n                                                data-placement=\"top\" title=\"Delete\">\n                                                <i class=\"fas fa-trash-alt\"></i>\n                                            </button>\n                                        </center>";
                                            },
                                            "orderable": false
                                        }]
                                    });

                                    $('#example').tooltip({
                                        selector: '[data-toggle="tooltip"]'
                                    });
                                }

                                // let Datatable = [];
                                // UsersDATATABLE.fnClearTable();
                                // $.each(UsersList, function (index, item) {
                                //     let ret = [];
                                //     let btnBlock = `                            
                                //     <button type="button" class="btn btn-secondary btn-sm btn-block-user" index=${index} data-toggle="tooltip" data-placement="top" title="Block">
                                //         <i class="fas fa-times"></i>
                                //     </button>`;
                                //     if (item.block) {
                                //         btnBlock = `                            
                                //         <button type="button" class="btn btn-secondary btn-sm btn-block-user" index=${index} data-toggle="tooltip" data-placement="top" title="UnBlock">
                                //             <i class="fas fa-unlock"></i>
                                //         </button>`;
                                //     }
                                //     ret[0] = item.fname + " " + item.lname;
                                //     ret[1] = item.phone[0].phone_user;
                                //     ret[2] = item.email[0].email_user;
                                //     ret[3] = item.block ? '<b class="text-danger">Block</b>' : 'Unblock';
                                //     ret[4] = item.sub_type_user;
                                //     ret[5] = item.online ? '<b class="text-success">online <i class="fas fa-circle text-success fa-xs"></i></b>' : '<span class="text-secondary">offline <i class="fas fa-circle text-secondary fa-xs"></i></span>';
                                //     ret[6] = `<center>
                                //                     <button type="button" class="btn btn-primary btn-sm btn-detail" index=${index} data-toggle="tooltip"
                                //                         data-placement="top" title="Detail">
                                //                         <i class="fas fa-list"></i>
                                //                     </button>
                                //                     <button type="button" class="btn btn-success btn-sm btn-edit" index=${index}  data-toggle="tooltip"
                                //                         data-placement="top" title="Edit">
                                //                         <i class="fas fa-edit"></i>
                                //                     </button>
                                //                     ${btnBlock}
                                //                     <button type="button" class="btn btn-danger btn-sm btn-delete"  index=${index}  data-toggle="tooltip"
                                //                         data-placement="top" title="Delete">
                                //                         <i class="fas fa-trash-alt"></i>
                                //                     </button>
                                //                 </center>`;
                                //     Datatable.push(ret);
                                // });
                                // UsersDATATABLE.fnAddData(Datatable);

                                return _context.abrupt("return");

                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            return function createTableUsersCompany() {
                return _ref.apply(this, arguments);
            };
        }();

        var createTableUsersCustomer = function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
                var page;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (UsersDATATABLE != null) {
                                    page = UsersDATATABLE.page.info().page;

                                    UsersDATATABLE.ajax.reload();
                                    UsersDATATABLE.page(page).draw('page');
                                } else {
                                    UsersDATATABLE = $('#example').on('xhr.dt', function (e, settings, json, xhr) {
                                        Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                                    }).DataTable({
                                        "processing": true,
                                        "serverSide": true,
                                        "destroy": true,
                                        "responsive": true,
                                        "language": language,
                                        "ajax": {
                                            url: END_POINT + config.getUsers,
                                            headers: {
                                                authorization: 'bearer ' + getCookie('token')
                                            },
                                            "dataSrc": function dataSrc(json) {
                                                UsersList = json.data;
                                                console.log(UsersList);
                                                return json.data;
                                            }
                                        },
                                        "columns": [{
                                            "mRender": function mRender(data, type, row) {
                                                return row.fname + " " + row.lname;
                                            }
                                        }, {
                                            "mRender": function mRender(data, type, row) {
                                                return row.phone[0].phone_user;
                                            }
                                        }, {
                                            "mRender": function mRender(data, type, row) {
                                                return row.email[0].email_user;
                                            }
                                        }, {
                                            "mData": "block",
                                            "mRender": function mRender(data, type, row) {
                                                return data ? '<b class="text-danger">Block</b>' : 'Unblock';
                                            }
                                        }, {
                                            "mData": "online",
                                            "mRender": function mRender(data, type, row) {
                                                return data ? '<b class="text-success">online <i class="fas fa-circle text-success fa-xs"></i></b>' : '<span class="text-secondary">offline <i class="fas fa-circle text-secondary fa-xs"></i></span>';
                                            }
                                        }, {
                                            "mRender": function mRender(data, type, row, index) {
                                                var btnBlock = "                            \n                            <button type=\"button\" class=\"btn btn-secondary btn-sm btn-block-user\" index=" + index.row + " data-toggle=\"tooltip\" data-placement=\"top\" title=\"Block\">\n                                <i class=\"fas fa-times\"></i>\n                            </button>";
                                                if (row.block) {
                                                    btnBlock = "                            \n                                <button type=\"button\" class=\"btn btn-secondary btn-sm btn-block-user\" index=" + index.row + " data-toggle=\"tooltip\" data-placement=\"top\" title=\"UnBlock\">\n                                    <i class=\"fas fa-unlock\"></i>\n                                </button>";
                                                }
                                                return "<center>\n                                            <button type=\"button\" class=\"btn btn-primary btn-sm btn-detail\" index=" + index.row + " data-toggle=\"tooltip\"\n                                                data-placement=\"top\" title=\"Detail\">\n                                                <i class=\"fas fa-list\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-success btn-sm btn-edit\" index=" + index.row + "  data-toggle=\"tooltip\"\n                                                data-placement=\"top\" title=\"Edit\">\n                                                <i class=\"fas fa-edit\"></i>\n                                            </button>\n                                            " + btnBlock + "\n                                            <button type=\"button\" class=\"btn btn-danger btn-sm btn-delete\"  index=" + index.row + "  data-toggle=\"tooltip\"\n                                                data-placement=\"top\" title=\"Delete\">\n                                                <i class=\"fas fa-trash-alt\"></i>\n                                            </button>\n                                        </center>";
                                            },
                                            "orderable": false
                                        }]
                                    });

                                    $('#example').tooltip({
                                        selector: '[data-toggle="tooltip"]'
                                    });
                                }

                                return _context2.abrupt("return");

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            })
            // let Datatable = [];
            // UsersDATATABLE.fnClearTable();
            // $.each(UsersList, function (index, item) {
            //     let ret = [];
            //     let btnBlock = `                            
            //     <button type="button" class="btn btn-secondary btn-sm btn-block-user" index=${index} data-toggle="tooltip" data-placement="top" title="Block">
            //         <i class="fas fa-times"></i>
            //     </button>`;
            //     if (item.block) {
            //         btnBlock = `                            
            //         <button type="button" class="btn btn-secondary btn-sm btn-block-user" index=${index} data-toggle="tooltip" data-placement="top" title="UnBlock">
            //             <i class="fas fa-unlock"></i>
            //         </button>`;
            //     }
            //     ret[0] = item.fname + " " + item.lname;
            //     ret[1] = item.phone[0].phone_user;
            //     ret[2] = item.email[0].email_user;
            //     ret[3] = item.block ? '<b class="text-danger">Block</b>' : 'Unblock';
            //     ret[4] = item.online ? '<b class="text-success">online <i class="fas fa-circle text-success fa-xs"></i></b>' : '<span class="text-secondary">offline <i class="fas fa-circle text-secondary fa-xs"></i></span>';
            //     ret[5] = `<center>
            //                     <button type="button" class="btn btn-primary btn-sm btn-detail" index=${index} data-toggle="tooltip"
            //                         data-placement="top" title="Detail">
            //                         <i class="fas fa-list"></i>
            //                     </button>
            //                     <button type="button" class="btn btn-success btn-sm btn-edit" index=${index}  data-toggle="tooltip"
            //                         data-placement="top" title="Edit">
            //                         <i class="fas fa-edit"></i>
            //                     </button>
            //                     ${btnBlock}
            //                     <button type="button" class="btn btn-danger btn-sm btn-delete"  index=${index}  data-toggle="tooltip"
            //                         data-placement="top" title="Delete">
            //                         <i class="fas fa-trash-alt"></i>
            //                     </button>
            //                 </center>`;
            //     Datatable.push(ret);
            // });
            // UsersDATATABLE.fnAddData(Datatable);
            );

            return function createTableUsersCustomer() {
                return _ref2.apply(this, arguments);
            };
        }();

        var onSaveUserClick = function onSaveUserClick(el) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["d" /* checkError */])(validateInput.create)) return;
            __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].set(el);
            var username_input = $("#add_username").val();
            var email_input = $("#add_email_val").val();
            var fname_input = $("#add_fname_val").val();
            var lname_input = $("#add_lname_val").val();
            var phone_input = $("#add_phone_val").val();
            var type_user_input = null;
            if (config.type === 'COMPANY') {
                type_user_input = $("#add_type_user_val").val();
            }
            $.ajax({
                url: END_POINT + config.create,
                dataType: 'json',
                method: "POST",
                headers: {
                    authorization: 'bearer ' + getCookie('token')
                },
                data: {
                    username: username_input,
                    email: email_input,
                    fname: fname_input,
                    lname: lname_input,
                    phone: phone_input,
                    sub_type_user: type_user_input
                },
                success: function success(res, textStatus, xhr) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                    toastr["success"]("Success");
                    _this.showLastestDatatable();
                    __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset(el);
                    $("#addUser").modal('hide');
                    $("#addUser").find("input,textarea,select").val('').end();
                },
                error: function error(res) {
                    __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset(el);
                    var errors = res.responseJSON.errors;
                    if (errors.username) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utility__["l" /* showErrorsForInputCustom */])($("#add_username"), errors.username[0]);
                    }
                    if (errors.email) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utility__["l" /* showErrorsForInputCustom */])($("#add_email_val"), errors.email[0]);
                    }
                    if (errors.phone) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utility__["l" /* showErrorsForInputCustom */])($("#add_phone_val"), errors.phone[0]);
                    }
                    __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset(el);
                }
            });
        };

        var onDetailClick = function onDetailClick(key) {
            modalDetail = new ModalDetail(config);
            modalDetail.create(key);
        };

        var onEditClick = function onEditClick(key) {
            modalEdit = new ModalEdit(config);
            modalEdit.create(key);
        };

        var onBlockClick = function onBlockClick(key) {
            modalBlock = new ModalToggleActive(config);
            modalBlock.create(key);
        };

        var onDeleteClick = function onDeleteClick(key) {
            modalDelete = new ModalDelete(config);
            modalDelete.create(key);
        };

        var updateDatatableData = function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!(config.type === "COMPANY")) {
                                    _context3.next = 5;
                                    break;
                                }

                                _context3.next = 3;
                                return createTableUsersCompany();

                            case 3:
                                _context3.next = 8;
                                break;

                            case 5:
                                if (!(config.type === "CUSTOMER")) {
                                    _context3.next = 8;
                                    break;
                                }

                                _context3.next = 8;
                                return createTableUsersCustomer();

                            case 8:

                                $('#example').on('click', '.btn-detail', function () {
                                    onDetailClick($(this).attr('index'));
                                });

                                $('#example').on('click', '.btn-edit', function () {
                                    onEditClick($(this).attr('index'));
                                });

                                $('#example').on('click', '.btn-block-user', function () {
                                    onBlockClick($(this).attr('index'));
                                });

                                $('#example').on('click', '.btn-unblock-user', function () {
                                    onUnBlockClick($(this).attr('index'));
                                });

                                $('#example').on('click', '.btn-delete', function () {
                                    onDeleteClick($(this).attr('index'));
                                });

                            case 13:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            return function updateDatatableData() {
                return _ref3.apply(this, arguments);
            };
        }();

        var createModalDelete = function createModalDelete() {
            if (ModalDeleteEmail == null && ModalDeletePhone == null) {
                ModalDeleteEmail = "\n                                    <div class=\"modal\" id=\"modal-delete-email\">\n                                        <div class=\"modal-dialog\">\n                                            <div class=\"modal-content\">\n        \n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title\">Delete Email</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                            </div>\n            \n                                            <div class=\"modal-body\">\n                                                Are you sure to delete this email account : <span id=\"email-delete\"></span> ?\n                                            </div>\n            \n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" id=\"modal-btn-delete-email\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                                            </div>\n                                        \n                                            </div>\n                                        </div>\n                                    </div>";

                ModalDeletePhone = "\n                                    <div class=\"modal\" id=\"modal-delete-phone\">\n                                        <div class=\"modal-dialog\">\n                                            <div class=\"modal-content\">\n\n                                            <div class=\"modal-header\">\n                                                <h4 class=\"modal-title\">Delete Phone</h4>\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                            </div>\n\n                                            <div class=\"modal-body\">\n                                            Are you sure to delete this phone number : <span id=\"phone-delete\"></span> ?\n                                            </div>\n\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\"  id=\"modal-btn-delete-phone\" class=\"btn btn-danger btn-block\">Delete</button>\n                                            </div>\n                                        \n                                            </div>\n                                        </div>\n                                    </div>";
                $('body').append(ModalDeleteEmail);
                $('body').append(ModalDeletePhone);
            }
        };

        var getAllEmailCustomer = function getAllEmailCustomer() {
            $.ajax({
                url: END_POINT + config.getAllEmailCustomer,
                method: "GET",
                headers: {
                    authorization: 'bearer ' + getCookie('token')
                },
                success: function success(res, textStatus, xhr) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                    input_bind_email = $('#input_bind_email');
                    input_bind_email.empty();
                    if (input_bind_email.data('fastselect')) {
                        input_bind_email.data('fastselect').destroy();
                    }
                    res.data.map(function (data) {
                        input_bind_email.append("<option value=\"" + data.user_id + "\">" + data.email_user + "</option>");
                    });
                    input_bind_email.fastselect();
                },
                error: function error(res) {}
            });
        };

        var addCustomerInCompany = function addCustomerInCompany() {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__utility__["d" /* checkError */])(validateInput.bindUser)) {
                return;
            }
            __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].set($("#btn_save_bind_user"));
            $.ajax({
                url: END_POINT + config.addCustomerInCompany,
                method: "POST",
                headers: {
                    authorization: 'bearer ' + getCookie('token')
                },
                data: {
                    userList: input_bind_email.val()
                },
                success: function success(res, textStatus, xhr) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                    $("#bindUser").modal('hide');
                    getAllEmailCustomer();
                    __WEBPACK_IMPORTED_MODULE_1__utility__["a" /* LOADING */].reset($("#btn_save_bind_user"));
                    _this.showLastestDatatable();
                },
                error: function error(res) {
                    console.log(res);
                }
            });
        };

        this.initialAndRun = function () {
            showDatatableLoadingStatus(true);
            _this.showLastestDatatable();
            //createModalDelete();
            $('#btn-add-user').unbind().click(function () {
                Object(__WEBPACK_IMPORTED_MODULE_1__utility__["k" /* resetInputValidate */])();
                modalCreate = new ModalCreate(config);
                modalCreate.resetModal();

                if (config.type === 'COMPANY') {
                    $(".modal-title").html("Create Company User");
                } else if (config.type === 'CUSTOMER') {
                    $(".modal-title").html("Create Customer User");
                }

                $("#addUser").modal('show');
            });

            $('#btn-save-add-user').unbind().click(function () {
                onSaveUserClick($(this));
            });

            if (config.type === 'CUSTOMER') {

                $('#btn_bind_user').unbind().click(function () {
                    Object(__WEBPACK_IMPORTED_MODULE_1__utility__["k" /* resetInputValidate */])();
                    $("#bindUser").modal('show');
                });

                $("#btn_save_bind_user").unbind().click(function () {
                    addCustomerInCompany();
                });

                getAllEmailCustomer();
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__utility__["b" /* addEventValidate */])(validateInput.create);
            Object(__WEBPACK_IMPORTED_MODULE_1__utility__["b" /* addEventValidate */])(validateInput.bindUser);
        };

        this.showLastestDatatable = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return updateDatatableData();

                        case 2:
                            _context4.next = 4;
                            return $.ajax({
                                url: END_POINT + config.getOnlineUsers,
                                method: 'GET',
                                headers: {
                                    authorization: 'bearer ' + getCookie('token')
                                },
                                data: {
                                    type_user: config.type
                                },
                                success: function success(result, textStatus, xhr) {
                                    Object(__WEBPACK_IMPORTED_MODULE_1__utility__["c" /* checkAuthRes */])(xhr);
                                    var sum = 0;
                                    for (var i in result.users) {
                                        sum += Number(result.users[i].count);
                                        if (result.users[i].online === "online") {
                                            $("#total-user-online").html(result.users[i].count + " user");
                                        } else {
                                            $("#total-user-offline").html(result.users[i].count + " user");
                                        }
                                    }
                                    $("#total-user").html(sum + " user");
                                },
                                error: function error(_error) {
                                    console.log(_error);
                                }
                            });

                        case 4:

                            showDatatableLoadingStatus(false);

                        case 5:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));
    }

    _createClass(ManagementUsers, null, [{
        key: "refreshData",
        value: function refreshData() {
            return managementUsers.showLastestDatatable();
        }
    }]);

    return ManagementUsers;
}();

var managementUsers = null;

function FatoryCreateManagmentUser(config) {
    managementUsers = new ManagementUsers(config);
    managementUsers.initialAndRun();
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export showLoadingModal */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deepCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return convertHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return randomHexColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOADING; });
/* unused harmony export getTime */
/* unused harmony export aproximateHour */
/* unused harmony export filter_hour */
/* unused harmony export ERROR_INPUT */
/* harmony export (immutable) */ __webpack_exports__["b"] = addEventValidate;
/* harmony export (immutable) */ __webpack_exports__["d"] = checkError;
/* harmony export (immutable) */ __webpack_exports__["l"] = showErrorsForInputCustom;
/* harmony export (immutable) */ __webpack_exports__["k"] = resetInputValidate;
/* harmony export (immutable) */ __webpack_exports__["g"] = getFlatObject;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFlatObjectV2; });
/* harmony export (immutable) */ __webpack_exports__["i"] = getRndInteger;
/* unused harmony export diff_hours */
/* harmony export (immutable) */ __webpack_exports__["c"] = checkAuthRes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) {
    return function () {
        var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);var value = info.value;
                } catch (error) {
                    reject(error);return;
                }if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function (value) {
                        step("next", value);
                    }, function (err) {
                        step("throw", err);
                    });
                }
            }return step("next");
        });
    };
}

var showLoadingModal = function showLoadingModal(el, status) {
    var loading = " <div id=\"loading-save\" style=\"display:none;\">\n                        <div class=\"lds-ring\">\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                        </div>\n                        <h6 class='text-center'>Saving Data ...</h6>\n                    </div>";
    var _el = el;

    if (!_el.find("#loading-save").length) {
        _el.find(".modal-body").after(loading);
    }

    if (status) {
        _el.find("form").hide();
        _el.find(".modal-footer").hide();
        _el.find("#loading-save").show();
    } else {
        _el.find("form").show();
        _el.find(".modal-footer").show();
        _el.find("#loading-save").hide();
    }
};

var deepCopy = function deepCopy(data) {
    return data.map(function (item) {
        return Object.assign({}, item);
    });
};

var convertHex = function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
};

var randomHexColor = function randomHexColor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};

var resetText = null;

var LOADING = {
    set: function set(el) {
        resetText = el.html();
        var textLoading = el.attr('data-loading-text');
        el.html(textLoading);
        el.prop('disabled', true);
    },
    reset: function reset(el) {
        el.html(resetText);
        el.prop('disabled', false);
    }
};

function getTime(hours, minutes) {
    var time = null;
    minutes = minutes + "";
    if (hours < 12) {
        time = "AM";
    } else {
        time = "PM";
    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    return hours + ":" + minutes + " " + time;
}

function aproximateHour(mins) {
    var minutes = Math.round(mins % 60);
    if (minutes == 60 || minutes == 0) {
        return mins / 60;
    }
    return Math.trunc(mins / 60) + minutes / 100;
}

function filter_hour(value, type) {
    return value % 60 == 0 ? 1 : 0;
}

var ERROR_INPUT = {
    set: function set(target, errorList) {
        $(".text-alert").remove();
        Object.keys(target).map(function (key) {
            if (errorList[key]) {
                $(target[key].el).removeClass('input-error');
                $(target[key].el).addClass('input-error');
                $(target[key].el).after("<p class=\"text-alert small\" style=\"color:red\">" + errorList[key] + "</p>");

                $(target[key].el).focus(function () {
                    $(target[key].el).removeClass('input-error');
                    $(target[key].el).next(".text-alert").remove();
                });

                setTimeout(function () {
                    $(target[key].el).removeClass('input-error');
                    $(".text-alert").remove();
                }, 6000);
            }
        });
    },
    reset: function reset(el) {
        $(el).removeClass('input-error');
        $(".text-alert").remove();
    }
};

function addEventValidate(validateInput) {
    var inputs = $(validateInput.parent).find("input, textarea, select");
    $(validateInput.parent).on('change', 'input, textarea, select', function () {
        var elInput = $(this);
        var check = {};
        var attr = "";
        //inputs.each(function () {
        attr = $(this).attr('name');
        var val = $(this).val();
        // console.log(val)
        check[attr] = val == '' ? null : val;
        //})
        var errors = validate(check, validateInput.validate) || {};
        console.log(elInput, errors);
        showErrorsForInput(elInput, errors[elInput.attr('name')]);
    });

    // inputs.each(function () {
    //     $(this).change(function () {
    //         // let attr = $(this).attr('name');
    //         // let val = $(this).val();
    //         // let check = {};
    //         // check[attr] = val == '' ? null : val;
    //         // let errors = validate(check, validateInput.validate) || {};
    //         // console.log(attr, check[attr], errors);
    //         // showErrorsForInput($(this), errors[attr]);
    //         let elInput = $(this);
    //         let check = {};
    //         let attr = "";
    //         //inputs.each(function () {
    //             attr = $(this).attr('name');
    //             let val = $(this).val();
    //             console.log(val)
    //             check[attr] = val == '' ? null : val;
    //        // })
    //         let errors = validate(check, validateInput.validate) || {};
    //         console.log(elInput, errors);
    //         showErrorsForInput(elInput, errors[elInput.attr('name')]);
    //     });
    // })
}

function showErrors(validateInput, errors) {
    var inputs = $(validateInput.parent).find("input, textarea, select");
    console.log(errors);
    // let isError = true;
    // inputs.each(function () {
    //     let attr = $(this).attr('name');
    //     let val = $(this).val();
    //     let check = {};
    //     check[attr] = val == '' ? null : val;
    //     let errors = validate(check, validateInput.validate) || {};
    //     showErrorsForInput($(this), errors[attr]);
    // })
    // return isError;
    var key = Object.keys(errors);
    inputs.each(function () {
        var elInput = $(this);
        var attr = elInput.attr('name');
        key.map(function (_key) {
            if (_key === attr) {
                showErrorsForInput(elInput, errors[attr]);
            }
        });
    });
}

function checkError(validateInput) {
    var inputs = $(validateInput.parent).find("input, textarea, select");
    var isError = true;
    var check = {};
    inputs.each(function () {
        var attr = $(this).attr('name');
        var val = $(this).val();
        check[attr] = val == '' ? null : val;
    });
    var errors = validate(check, validateInput.validate) || {};
    if (!validate.isEmpty(errors)) {
        showErrors(validateInput, errors);
        isError = true;
    } else {
        isError = false;
    }
    return isError;
}

// Shows the errors for a specific input
function showErrorsForInput(input, errors) {
    if (!validate.isEmpty(errors)) {
        input.removeClass("has-success");
        input.addClass("has-error");
        if (input.parent().find(".messages-error").length > 0) {
            //input.parent().addClass("has-error");
            input.parent().find(".messages-error").html(errors[0]);
        } else {
            //input.parent().addClass("has-error");
            input.parent().parent().find(".messages-error").html(errors[0]);
        }
    } else {
        input.removeClass("has-error");
        input.addClass("has-success");
        if (input.parent().find(".messages-error").length > 0) {
            //input.parent().addClass("has-success");
            input.parent().find(".messages-error").html('');
        } else {
            //input.parent().addClass("has-success");
            input.parent().parent().find(".messages-error").html('');
        }
    }
}

function showErrorsForInputCustom(input, errors) {
    //console.log(input, errors);
    if (!validate.isEmpty(errors)) {
        input.removeClass("has-success");
        input.addClass("has-error");
        input.parent().find(".messages-error").html(errors);
    } else {
        input.removeClass("has-error");
        input.addClass("has-success");
        input.parent().find(".messages-error").html('');
    }
}

function resetInputValidate() {
    $("input, textarea, select").removeClass('has-success');
    $("input, textarea, select").removeClass('has-error');
    $(".messages-error").html('');
}

function getFlatObject(object) {
    function iter(o, p) {
        if (Array.isArray(o)) {
            o.forEach(function (a, i) {
                iter(a, p.concat(i));
            });
            return;
        }
        if (o !== null && (typeof o === "undefined" ? "undefined" : _typeof(o)) === 'object') {
            Object.keys(o).forEach(function (k) {
                iter(o[k], p.concat(k));
            });
            return;
        }
        path[p.join('/')] = o;
    }

    var path = {};
    iter(object, []);
    return path;
}

var getFlatObjectV2 = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(object) {
        var iter, path;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        iter = function iter(o, p) {
                            if (Array.isArray(o)) {
                                o.forEach(function (a, i) {
                                    iter(a, p.concat(i));
                                });
                                return;
                            }
                            if (o !== null && (typeof o === "undefined" ? "undefined" : _typeof(o)) === 'object') {
                                Object.keys(o).forEach(function (k) {
                                    iter(o[k], p.concat(k));
                                });
                                return;
                            }
                            path[p.join('.')] = o;
                        };

                        path = {};

                        iter(object, []);
                        return _context.abrupt("return", path);

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getFlatObjectV2(_x) {
        return _ref.apply(this, arguments);
    };
}();

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function diff_hours(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
}

function checkAuthRes(xhr) {
    if (xhr.getResponseHeader('authorization')) {
        var token = xhr.getResponseHeader('authorization').split(" ")[1];
        // $.ajax({
        //     url : "http://localhost:8000/SetCookie",
        //     method:"POST",
        //     data : {
        //         token : token
        //     },
        //     success : (res) => {
        //         console.log(res);
        //     },
        //     error :(res) =>{
        //         console.log(res)
        //     }
        // })
        setCookie('token', token);
    }
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var regeneratorRuntime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : {}
));


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(284);


/***/ })

/******/ });