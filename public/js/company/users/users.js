
var Users = new (function () {
    var UsersDATATABLE = null;
    var UsersList = [];
    var ModalDetail = null;
    var ModalEdit = null;
    var ModalBlock = null;
    var ModalUnBlock = null;
    var ModalDelete = null;
    const FormAddEmail = `
                            <div class="input-group mb-2">
                                <input type="text" class="add_email_val form-control mt-1" value={email} disabled>
                                    <div class="input-group-append">
                                        <button class="btn btn-danger mt-1 btn-delete-email" type="button"><i class="fas fa-times"></i></button>  
                                    </div>
                            </div>
                          `;
    const FormAddPhone = `  <div class="input-group mb-2">
                                <input type="text" class="add_phone_val form-control mt-1" value={phone} disabled>
                                <div class="input-group-append">
                                    <button class="btn btn-danger mt-1 btn-delete-phone" type="button"><i class="fas fa-times"></i></button>  
                                </div>
                            </div>`;
    var that = this;

    var updateDatatableData = (userList) => {
        var Datatable = [];
        UsersDATATABLE.fnClearTable();
        $.each(userList.users, function (index, item) {

            let ret = [];
            let btnBlock = `                            
            <button type="button" class="btn btn-secondary btn-sm btn-block-user" index=${index} data-toggle="tooltip" data-placement="top" title="Block">
                <i class="fas fa-times"></i>
            </button>`;
            if (item.block) {
                btnBlock = `                            
                <button type="button" class="btn btn-info btn-sm btn-unblock-user" index=${index} data-toggle="tooltip" data-placement="top" title="UnBlock">
                    <i class="fas fa-unlock"></i>
                </button>`;
            }
            ret[0] = item.fname + " " + item.lname;
            ret[1] = item.phone.split(',')[0];
            ret[2] = item.email.split(',')[0];
            ret[3] = item.block ? 'Block' : 'Unblock';
            ret[4] = item.sub_type_user;
            ret[5] = `<center>
                            <button type="button" class="btn btn-primary btn-sm btn-detail" index=${index} data-toggle="tooltip"
                                data-placement="top" title="Detail">
                                <i class="fas fa-list"></i>
                            </button>
                            <button type="button" class="btn btn-success btn-sm btn-edit" index=${index}  data-toggle="tooltip"
                                data-placement="top" title="Edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            ${btnBlock}
                            <button type="button" class="btn btn-danger btn-sm btn-delete"  index=${index}  data-toggle="tooltip"
                                data-placement="top" title="Delete">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </center>`;
            Datatable.push(ret);
        });
        UsersDATATABLE.fnAddData(Datatable);

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

        $('[data-toggle="tooltip"]').tooltip();
    };

    var onSaveUserClick = () => {
        $("#addUser #loading-save").show();
        $("#form-add-user").hide();
        $("#btn-save-add-user").hide();
        let email_input = $("#add_email_val").val();
        let pwd_input = $("#add_pwd_val").val();
        let fname_input = $("#add_fname_val").val();
        let lname_input = $("#add_lname_val").val();
        let type_user_input = $("#add_type_user_val").val();
        let phone_input = $("#add_phone_val").val();
        $.ajax({
            url: "http://localhost:8000/api/company/users",
            dataType: 'json',
            method: "POST",
            data: {
                email: email_input,
                password: pwd_input,
                fname: fname_input,
                lname: lname_input,
                phone: phone_input,
                sub_type_user: type_user_input
            },
            success: (res) => {
                this.showLastestDatatable();
                $("#addUser").modal('hide');
                $("#addUser #loading-save").hide();
                $("#form-add-user").show();
                $("#btn-save-add-user").show();
            },
            error: (res) => {
                console.log(res);
            }
        });
    };

    var onDetailClick = (key) => {
        if (ModalDetail === null) {
            ModalDetail = `
                        <div class="modal fade" id="detailUser">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="title-user"></h5>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <div class="modal-body">
                                        <h6>Name : <span  id="name-user"><span></h6>
                                        <h6>Phone : <span id="phone-user"><span></h6>
                                        <h6>Email : <span id="email-user"><span></h6>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" id="" class="btn btn-success btn-block">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                          `;
            $('body').append(ModalDetail);
        }

        $('#title-user').html(UsersList[key].email.split(',')[0]);
        $('#name-user').html(UsersList[key].fname + " " + UsersList[key].lname);
        $('#phone-user').html(UsersList[key].phone);
        $('#email-user').html(UsersList[key].email);

        $("#detailUser").modal('show');
    };

    var onEditClick = (key) => {
        if (ModalEdit === null) {
            ModalEdit = `
                        <div class="modal fade" id="editUser">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Edit User Company</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <div class="modal-body">
                                        <form id="form-edit-user">
                                            <div class="row">
                                                <div class="col-6">
                                                    <label>Firstname</label>
                                                    <input type="text" id="edit-fname" class="form-control"/>
                                                    <button class="btn btn-primary btn-sm btn-radius mt-2" id="btn-add-email"><i class="fas fa-plus"></i> add email</button>
                                                    <div id="input-add-email">
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <label>Lastname</label>
                                                    <input type="text" id="edit-lname" class="form-control"/>
                                                    <button class="btn btn-primary btn-sm btn-radius mt-2" id="btn-add-phone"><i class="fas fa-plus"></i> add phone</button>
                                                    <div id="input-add-phone">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" id="btn-edit-submit" class="btn btn-success btn-block btn-submit-edit">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            $('body').append(ModalEdit);

        }

        $("#btn-edit-submit").unbind().click(function () {
            onSubmitEditclick(key);
        });

        $("#btn-add-phone").unbind().click(function () {
            event.preventDefault();
            let addPhone = FormAddPhone.replace('disabled', '');
            addPhone = addPhone.replace('{phone}', '');
            if ($(".btn-delete-phone").length <= 2) {
                $("#input-add-phone").append(addPhone);
            }
        });

        $("#btn-add-email").unbind().click(function () {
            event.preventDefault();
            let addEmail = FormAddEmail.replace('disabled', '');
            addEmail = addEmail.replace('{email}', '');
            if ($(".btn-delete-email").length <= 2)
                $("#input-add-email").append(addEmail);
        });

        let phoneList = UsersList[key].phone.split(',');
        let inputPhone = null;
        inputPhone = phoneList.map(phone => {
            return FormAddPhone.replace('{phone}', phone);
        });

        let emailList = UsersList[key].email.split(',');
        let inputEmail = null;
        inputEmail = emailList.map(email => {
            return FormAddEmail.replace('{email}', email);
        });

        $('#edit-fname').val(UsersList[key].fname);
        $('#edit-lname').val(UsersList[key].lname);
        $('#input-add-phone').html(inputPhone.join(''));
        $('#input-add-email').html(inputEmail.join(''));
        $('#editUser').modal('show');
    };

    var onSubmitEditclick = (index) => {
        let fname = $("#edit-fname").val();
        let lname = $("#edit-lname").val();
        let phone = $(".add_phone_val").map(function () {
            return $(this).val();
        }).get();
        let email = $(".add_email_val").map(function () {
            return $(this).val();
        }).get();
        $.ajax({
            url: "http://localhost:8000/api/company/users/edit",
            method: "PUT",
            data: {
                user_id: UsersList[index].user_id,
                fname: fname,
                lname: lname,
                phone_user: phone,
                email_user: email
            },
            success: (res) => {
                $("#editUser").modal('hide');
                this.showLastestDatatable();
            },
            error: (res) => {
                console.log(res);
            }
        });
    };

    var onBlockClick = (key) => {
        if (ModalBlock === null) {
            ModalBlock = `
                        <div class="modal fade" id="BlockUser">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Block User Company</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <div class="modal-body">
                                        <div id="loading-save" style="display:none;">
                                            <div class="lds-ring">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <h6 class='text-center'>Saving Data ...</h6>
                                        </div>
                                        <form id="form-block-user">
                                            <h6 id="span-text-confirm-block"></h6>
                                        </form>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" id="btn-block-submit" class="btn btn-danger btn-block">Block</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            $('body').append(ModalBlock);
        }

        $('#btn-block-submit').unbind().click(function () {
            onSubmitBlockUser(key);
        });

        $("#span-text-confirm-block").html("Are you sure to block " + UsersList[key].fname + " " + UsersList[key].lname + " ?");
        $("#BlockUser").modal('show');
    };

    var onUnBlockClick = (key) => {
        if (ModalUnBlock === null) {
            ModalUnBlock = `
            <div class="modal fade" id="UnBlockUser">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Block User Company</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div id="loading-save" style="display:none;">
                                <div class="lds-ring">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h6 class='text-center'>Saving Data ...</h6>
                            </div>
                            <form id="form-unblock-user">
                                <h6 id="span-text-confirm-unblock"></h6>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" id="btn-unblock-submit" class="btn btn-info btn-block">UnBlock</button>
                        </div>
                    </div>
                </div>
            </div>`;

            $('body').append(ModalUnBlock);
        }

        $('#btn-unblock-submit').unbind().click(function () {
            onSubmitUnBlockUser(key);
        });

        $("#span-text-confirm-unblock").html("Are you sure to unblock " + UsersList[key].fname + " " + UsersList[key].lname + " ?");
        $("#UnBlockUser").modal('show');

    };

    var onSubmitBlockUser = (key) => {
        $("#BlockUser").find("#loading-save").show();
        $("#BlockUser #form-block-user").hide();
        $.ajax({
            url: "http://localhost:8000/api/company/users/block",
            method: "put",
            data: {
                user_id: UsersList[key].user_id,
                block: 1
            },
            success: (res) => {
                $("#BlockUser").modal('hide');
                $("#BlockUser").find("#loading-save").hide();
                $("#BlockUser #form-block-user").show();
                that.showLastestDatatable();
            },
            error: (res) => {
                console.log(res);
            }
        });
    };

    var onSubmitUnBlockUser = (key) => {
        $("#UnBlockUser").find("#loading-save").show();
        $("#UnBlockUser #form-unblock-user").hide();
        $.ajax({
            url: "http://localhost:8000/api/company/users/block",
            method: "put",
            data: {
                user_id: UsersList[key].user_id,
                block: 0
            },
            success: (res) => {
                $("#UnBlockUser").modal('hide');
                $("#UnBlockUser").find("#loading-save").hide();
                $("#UnBlockUser #form-unblock-user").show();
                that.showLastestDatatable();
            },
            error: (res) => {
                console.log(res);
            }
        });
    };

    var onDeleteClick = (key) => {
        if (ModalDelete === null) {
            ModalDelete = `
                        <div class="modal fade" id="DeleteUser">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Delete User Company</h4>
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>

                                    <div class="modal-body">
                                        <form id="form-delete-user">
                                            <h6 id="span-text-confirm"></h6>
                                        </form>
                                    </div>

                                    <div class="modal-footer">
                                        <button type="button" id="btn-delete-submit" class="btn btn-danger btn-block">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
            $('body').append(ModalDelete);
        }

        $('#span-text-confirm').html("Are you sure to delete " + UsersList[key].email + " ? ");
        $('#DeleteUser').modal('show');
    };

    var initialDatatable = () => {
        if (UsersDATATABLE !== null) {
            return false;
        }

        UsersDATATABLE = $('#example').dataTable({});


        $("#btn-save-add-user").unbind().click(function () {
            onSaveUserClick($(this));
        });


    };

    var showDatatableLoadingStatus = (showOrHide) => {
        if (showOrHide) {
            $('#example').hide();
            $('.lds-roller').show();
        }
        else {
            $('.lds-roller').hide();
            $('.text-loading').hide();
            $('#example').show();
            $('.text-static').show();
        }
    };

    this.initialAndRun = () => {
        this.showLastestDatatable();
    };

    this.showLastestDatatable = () => {
        showDatatableLoadingStatus(true);
        $.ajax({
            url: "http://localhost:8000/api/company/users",
            method: 'GET',
            success: function (result) {
                initialDatatable();
                UsersList = result.users;
                showDatatableLoadingStatus(false);
                updateDatatableData(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };


});


$(document).ready(function () {
    var TB_USERS = Users;
    TB_USERS.initialAndRun({});
});