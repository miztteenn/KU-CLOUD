!function(t){var n={};function e(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="http://localhost:8080/",e(e.s=4)}({"0v0P":function(t,n,e){"use strict";e.d(n,"b",function(){return a}),e.d(n,"a",function(){return i});var a=function(t,n){var e=t;e.find("#loading-save").length||e.find(".modal-body").after(' <div id="loading-save" style="display:none;">\n                        <div class="lds-ring">\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                            <div></div>\n                        </div>\n                        <h6 class=\'text-center\'>Saving Data ...</h6>\n                    </div>'),n?(e.find("form").hide(),e.find(".modal-footer").hide(),e.find("#loading-save").show()):(e.find("form").show(),e.find(".modal-footer").show(),e.find("#loading-save").hide())},i=function(t){return t.map(function(t){return Object.assign({},t)})}},4:function(t,n,e){t.exports=e("m62b")},m62b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"ManagementUsers",function(){return g}),n.FatoryCreateManagmentUser=function(t){(k=new g(t)).initialAndRun()};var a=e("0v0P"),i=function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}();function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=null,l=null,d=null,c=null,r='\n                    <div class="input-group mb-2">\n                        <input type="text" class="add_email_val form-control mt-1" value={email} disabled>\n                            <div class="input-group-append">\n                                <button class="btn btn-danger mt-1 btn-delete-email" type="button"><i class="fas fa-times"></i></button>  \n                            </div>\n                    </div>\n                    ',u=' \n                    <div class="input-group mb-2">\n                        <input type="text" class="add_phone_val form-control mt-1" value={phone} disabled>\n                        <div class="input-group-append">\n                            <button class="btn btn-danger mt-1 btn-delete-phone" type="button"><i class="fas fa-times"></i></button>  \n                        </div>\n                    </div>';toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"3000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var b="http://localhost:8000/api/",m=function t(){if(s(this,t),o)return o;this.create=function(t){if(0===$("#detailUser").length){$("body").append('\n                                <div class="modal fade" id="detailUser">\n                                    <div class="modal-dialog">\n                                        <div class="modal-content">\n                                            <div class="modal-header">\n                                                <h5 class="modal-title" id="title-user"></h5>\n                                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n                                            </div>\n        \n                                            <div class="modal-body">\n                                                <h6>Name : <span  id="name-user"><span></h6>\n                                                <h6>Phone : <span id="phone-user"><span></h6>\n                                                <h6>Email : <span id="email-user"><span></h6>\n                                            </div>\n        \n                                            <div class="modal-footer">\n                                                \n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                  ')}$("#title-user").html(h[t].email[0].email_user),$("#name-user").html(h[t].fname+" "+h[t].lname);var n=h[t].phone.map(function(t){return t.phone_user});$("#phone-user").html(n.join(","));var e=h[t].email.map(function(t){return t.email_user});$("#email-user").html(e.join(",")),$("#detailUser").modal("show")}},f=function t(n){if(s(this,t),l)return l;this.create=function(t){if(0===$("#editUser").length){$("body").append('\n                <div class="modal fade" id="editUser">\n                    <div class="modal-dialog modal-lg">\n                        <div class="modal-content">\n                            <div class="modal-header">\n                                <h4 class="modal-title">Edit User Company</h4>\n                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n                            </div>\n\n                            <div class="modal-body">\n                                <form id="form-edit-user">\n                                    <div class="row">\n                                        <div class="col-6">\n                                            <label>Firstname</label>\n                                            <input type="text" id="edit-fname" class="form-control"/>\n                                            <button class="btn btn-primary btn-sm btn-radius mt-2" id="btn-add-email"><i class="fas fa-plus"></i> add email</button>\n                                            <div id="input-add-email">\n                                            </div>\n                                        </div>\n                                        <div class="col-6">\n                                            <label>Lastname</label>\n                                            <input type="text" id="edit-lname" class="form-control"/>\n                                            <button class="btn btn-primary btn-sm btn-radius mt-2" id="btn-add-phone"><i class="fas fa-plus"></i> add phone</button>\n                                            <div id="input-add-phone">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n\n                            <div class="modal-footer">\n                                <button type="button" id="btn-edit-submit" class="btn btn-success btn-block btn-submit-edit">Save</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>'),$("#btn-edit-submit").unbind().click(function(){e(t)}),$("#btn-add-phone").unbind().click(function(){event.preventDefault();var t=u.replace("disabled","");t=t.replace("{phone}",""),$(".btn-delete-phone").length<=2&&$("#input-add-phone").append(t)}),$("#btn-add-email").unbind().click(function(){event.preventDefault();var t=r.replace("disabled","");t=t.replace("{email}",""),$(".btn-delete-email").length<=2&&$("#input-add-email").append(t)})}var n=null;n=h[t].phone.map(function(t){return u.replace("{phone}",t.phone_user)});var a=null;a=h[t].email.map(function(t){return r.replace("{email}",t.email_user)}),$("#edit-fname").val(h[t].fname),$("#edit-lname").val(h[t].lname),$("#input-add-phone").html(n.join("")),$("#input-add-email").html(a.join("")),$("#editUser").modal("show")};var e=function(t){var e=$("#edit-fname").val(),i=$("#edit-lname").val(),s=$(".add_phone_val").map(function(){return $(this).val()}).get(),o=$(".add_email_val").map(function(){return $(this).val()}).get();Object(a.b)($("#editUser"),!0),$.ajax({url:b+n.edit,method:"PUT",data:{user_id:h[t].user_id,fname:e,lname:i,phone_user:s,email_user:o},success:function(t){toastr.success("Edit user success"),Object(a.b)($("#editUser"),!1),$("#editUser").modal("hide"),g.refreshData()},error:function(t){console.log(t)}})}},p=function t(n){if(s(this,t),d)return d;this.create=function(t){if(0===$("#BlockUser").length){$("body").append('\n                <div class="modal fade" id="BlockUser">\n                    <div class="modal-dialog">\n                        <div class="modal-content">\n                            <div class="modal-header">\n                                <h4 class="modal-title">Block User Company</h4>\n                                <button type="button" class="close" data-dismiss="modal">&times;</button>\n                            </div>\n\n                            <div class="modal-body">\n                                <form id="form-block-user">\n                                    <h6 id="span-text-confirm-block"></h6>\n                                </form>\n                            </div>\n\n                            <div class="modal-footer" id="btn-toggle-active-footer">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>')}var n=h[t].block?"block":"unblock";h[t].block?$("#btn-toggle-active-footer").html('<button type="button" id="btn-toggle-active-submit" class="btn btn-info btn-block">UnBlock</button>'):$("#btn-toggle-active-footer").html('<button type="button" id="btn-toggle-active-submit" class="btn btn-danger btn-block">Block</button>'),$("#btn-toggle-active-submit").unbind().click(function(){e(t)}),$("#span-text-confirm-block").html("Are you sure to "+n+" "+h[t].fname+" "+h[t].lname+" ?"),$("#BlockUser").modal("show")};var e=function(t){Object(a.b)($("#BlockUser"),!0),$.ajax({url:b+n.block,method:"put",data:{user_id:h[t].user_id,block:h[t].block?0:1},success:function(t){toastr.success("Blcok user success"),$("#BlockUser").modal("hide"),Object(a.b)($("#BlockUser"),!1),g.refreshData()},error:function(t){console.log(t)}})}},v=function t(n){if(s(this,t),c)return c;this.create=function(t){if(0===$("#DeleteUser").length){$("body").append('<div class="modal fade" id="DeleteUser">\n                                <div class="modal-dialog">\n                                    <div class="modal-content">\n                                        <div class="modal-header">\n                                            <h4 class="modal-title">Delete User Company</h4>\n                                            <button type="button" class="close" data-dismiss="modal">&times;</button>\n                                        </div>\n    \n                                        <div class="modal-body">\n                                            <form id="form-delete-user">\n                                                <h6 id="span-text-confirm"></h6>\n                                            </form>\n                                        </div>\n    \n                                        <div class="modal-footer">\n                                            <button type="button" id="btn-delete-submit" class="btn btn-danger btn-block">Delete</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>')}$("#span-text-confirm").html("Are you sure to delete "+h[t].email[0].email_user+" ? "),$("#DeleteUser").modal("show")}},h=[],g=function(){function t(n){var e=this;s(this,t),this.config={getUsers:n.getUsers,getOnlineUsers:n.OnlineUsers,create:n.create,edit:n.edit,block:n.block,unblock:n.unblock,delete:n.delete,type:n.type};var i=null,r=function(t){t?($("#example").hide(),$(".lds-roller").show()):($(".lds-roller").hide(),$(".text-loading").hide(),$("#example").show(),$(".text-static").show())},u=function(){var t=$("#add_email_val").val(),i=$("#add_pwd_val").val(),s=$("#add_fname_val").val(),o=$("#add_lname_val").val(),l=$("#add_phone_val").val(),d=null;"COMPANY"===n.type&&(d=$("#add_type_user_val").val()),Object(a.b)($("#addUser"),!0),$.ajax({url:b+n.create,dataType:"json",method:"POST",data:{email:t,password:i,fname:s,lname:o,phone:l,sub_type_user:d},success:function(t){toastr.success("Create user success"),e.showLastestDatatable(),Object(a.b)($("#addUser"),!1),$("#addUser").modal("hide")},error:function(t){console.log(t)}})},g=function(t){(o=new m).create(t)},k=function(t){(l=new f(n)).create(t)},y=function(t){(d=new p(n)).create(t)},x=function(t){(c=new v(n)).create(t)},_=function(){var t;"COMPANY"===n.type?(t=[],i.fnClearTable(),$.each(h,function(n,e){var a=[],i='                            \n                <button type="button" class="btn btn-secondary btn-sm btn-block-user" index='+n+' data-toggle="tooltip" data-placement="top" title="Block">\n                    <i class="fas fa-times"></i>\n                </button>';e.block&&(i='                            \n                    <button type="button" class="btn btn-secondary btn-sm btn-block-user" index='+n+' data-toggle="tooltip" data-placement="top" title="UnBlock">\n                        <i class="fas fa-unlock"></i>\n                    </button>'),a[0]=e.fname+" "+e.lname,a[1]=e.phone[0].phone_user,a[2]=e.email[0].email_user,a[3]=e.block?'<b class="text-danger">Block</b>':"Unblock",a[4]=e.sub_type_user,a[5]=e.online?'<b class="text-success">online <i class="fas fa-circle text-success fa-xs"></i></b>':'<span class="text-secondary">offline <i class="fas fa-circle text-secondary fa-xs"></i></span>',a[6]='<center>\n                                <button type="button" class="btn btn-primary btn-sm btn-detail" index='+n+' data-toggle="tooltip"\n                                    data-placement="top" title="Detail">\n                                    <i class="fas fa-list"></i>\n                                </button>\n                                <button type="button" class="btn btn-success btn-sm btn-edit" index='+n+'  data-toggle="tooltip"\n                                    data-placement="top" title="Edit">\n                                    <i class="fas fa-edit"></i>\n                                </button>\n                                '+i+'\n                                <button type="button" class="btn btn-danger btn-sm btn-delete"  index='+n+'  data-toggle="tooltip"\n                                    data-placement="top" title="Delete">\n                                    <i class="fas fa-trash-alt"></i>\n                                </button>\n                            </center>',t.push(a)}),i.fnAddData(t),$("#example").on("click",".btn-detail",function(){g($(this).attr("index"))}),$("#example").on("click",".btn-edit",function(){k($(this).attr("index"))}),$("#example").on("click",".btn-block-user",function(){y($(this).attr("index"))}),$("#example").on("click",".btn-unblock-user",function(){onUnBlockClick($(this).attr("index"))}),$("#example").on("click",".btn-delete",function(){x($(this).attr("index"))})):"CUSTOMER"===n.type&&function(){var t=[];i.fnClearTable(),$.each(h,function(n,e){var a=[],i='                            \n                <button type="button" class="btn btn-secondary btn-sm btn-block-user" index='+n+' data-toggle="tooltip" data-placement="top" title="Block">\n                    <i class="fas fa-times"></i>\n                </button>';e.block&&(i='                            \n                    <button type="button" class="btn btn-secondary btn-sm btn-block-user" index='+n+' data-toggle="tooltip" data-placement="top" title="UnBlock">\n                        <i class="fas fa-unlock"></i>\n                    </button>'),a[0]=e.fname+" "+e.lname,a[1]=e.phone[0].phone_user,a[2]=e.email[0].email_user,a[3]=e.block?'<b class="text-danger">Block</b>':"Unblock",a[4]=e.online?'<b class="text-success">online <i class="fas fa-circle text-success fa-xs"></i></b>':'<span class="text-secondary">offline <i class="fas fa-circle text-secondary fa-xs"></i></span>',a[5]='<center>\n                                <button type="button" class="btn btn-primary btn-sm btn-detail" index='+n+' data-toggle="tooltip"\n                                    data-placement="top" title="Detail">\n                                    <i class="fas fa-list"></i>\n                                </button>\n                                <button type="button" class="btn btn-success btn-sm btn-edit" index='+n+'  data-toggle="tooltip"\n                                    data-placement="top" title="Edit">\n                                    <i class="fas fa-edit"></i>\n                                </button>\n                                '+i+'\n                                <button type="button" class="btn btn-danger btn-sm btn-delete"  index='+n+'  data-toggle="tooltip"\n                                    data-placement="top" title="Delete">\n                                    <i class="fas fa-trash-alt"></i>\n                                </button>\n                            </center>',t.push(a)}),i.fnAddData(t),$("#example").on("click",".btn-detail",function(){g($(this).attr("index"))}),$("#example").on("click",".btn-edit",function(){k($(this).attr("index"))}),$("#example").on("click",".btn-block-user",function(){y($(this).attr("index"))}),$("#example").on("click",".btn-unblock-user",function(){onUnBlockClick($(this).attr("index"))}),$("#example").on("click",".btn-delete",function(){x($(this).attr("index"))})}(),$('[data-toggle="tooltip"]').tooltip()};this.initialAndRun=function(){e.showLastestDatatable(),$("#btn-add-user").unbind().click(function(){$("#addUser").modal("show")}),$("#btn-save-add-user").unbind().click(function(){u($(this))})},this.showLastestDatatable=function(){r(!0),$.ajax({url:b+n.getUsers,method:"GET",success:function(t){console.log(t),function(){if(null!==i)return!1;i=$("#example").dataTable({}),$("#btn-save-add-user").unbind().click(function(){u($(this))})}(),h=t.data,r(!1),_()},error:function(t){console.log(t)}}),$.ajax({url:b+n.getOnlineUsers,method:"GET",data:{type_user:n.type},success:function(t){var n=0;for(var e in t.users)n+=Number(t.users[e].count),"online"===t.users[e].online?$("#total-user-online").html(t.users[e].count+" user"):$("#total-user-offline").html(t.users[e].count+" user");$("#total-user").html(n+" user")},error:function(t){console.log(t)}})}}return i(t,null,[{key:"refreshData",value:function(){return k.showLastestDatatable()}}]),t}(),k=null}});