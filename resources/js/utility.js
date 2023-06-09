export const showLoadingModal = (el, status) => {
    let loading = ` <div id="loading-save" style="display:none;">
                        <div class="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h6 class='text-center'>Saving Data ...</h6>
                    </div>`;
    let _el = el;

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

export const deepCopy = (data) => {
    return data.map((item) => {
        return Object.assign({}, item);
    });
};

export const convertHex = (hex, opacity) => {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    let result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
};

export const randomHexColor = () => {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}

let resetText = null;

export const LOADING = {
    set: (el) => {
        resetText = el.html();
        let textLoading = el.attr('data-loading-text');
        el.html(textLoading);
        el.prop('disabled', true);
    },
    reset: (el) => {
        el.html(resetText);
        el.prop('disabled', false);
    }
};

export function getTime(hours, minutes) {
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

export function aproximateHour(mins) {
    let minutes = Math.round(mins % 60);
    if (minutes == 60 || minutes == 0) {
        return mins / 60;
    }
    return Math.trunc(mins / 60) + minutes / 100;
}

export function filter_hour(value, type) {
    return (value % 60 == 0) ? 1 : 0;
}

export const ERROR_INPUT = {
    set: (target, errorList) => {
        $(".text-alert").remove();
        Object.keys(target).map(key => {
            if (errorList[key]) {
                $(target[key].el).removeClass('input-error');
                $(target[key].el).addClass('input-error');
                $(target[key].el).after(`<p class="text-alert small" style="color:red">${errorList[key]}</p>`);

                $(target[key].el).focus(function () {
                    $(target[key].el).removeClass('input-error');
                    $(target[key].el).next(".text-alert").remove();
                });

                setTimeout(() => {
                    $(target[key].el).removeClass('input-error');
                    $(".text-alert").remove();
                }, 6000);
            }
        });

    },
    reset: (el) => {
        $(el).removeClass('input-error');
        $(".text-alert").remove();
    }
}


export function addEventValidate(validateInput) {
    let inputs = $(validateInput.parent).find("input, textarea, select");
    $(validateInput.parent).on('change','input, textarea, select',function(){
        let elInput = $(this);
        let check = {};
        let attr = "";
        //inputs.each(function () {
            attr = $(this).attr('name');
            let val = $(this).val();
           // console.log(val)
            check[attr] = val == '' ? null : val;
       //})
        let errors = validate(check, validateInput.validate) || {};
        //console.log(elInput, errors);
        showErrorsForInput(elInput, errors[elInput.attr('name')]);
    })
   
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
    let inputs = $(validateInput.parent).find("input, textarea, select");
    //console.log(errors);
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
    let key = Object.keys(errors);
    inputs.each(function () {
        let elInput = $(this);
        let attr = elInput.attr('name');
        key.map(_key => {
            if (_key === attr) {
                showErrorsForInput(elInput, errors[attr]);
            }
        })
    })

}

export function checkError(validateInput) {
    resetInputValidate();
    let inputs = $(validateInput.parent).find("input, textarea, select");
    let isError = true;
    let check = {};
    inputs.each(function () {
        let attr = $(this).attr('name');
        let val = $(this).val();
        check[attr] = val == '' ? null : val;
    })
    let errors = validate(check, validateInput.validate) || {};
    if (!validate.isEmpty(errors)) {
        showErrors(validateInput, errors);
        isError = true
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
        if(input.parent().find(".messages-error").length > 0){
            //input.parent().addClass("has-error");
            input.parent().find(".messages-error").html(errors[0]);
        }else{
            //input.parent().addClass("has-error");
            input.parent().parent().find(".messages-error").html(errors[0]);
        }
    } else {
        input.removeClass("has-error");
        input.addClass("has-success");
        if(input.parent().find(".messages-error").length > 0){
            //input.parent().addClass("has-success");
            input.parent().find(".messages-error").html('');
        }else{
            //input.parent().addClass("has-success");
            input.parent().parent().find(".messages-error").html('');
        }
    }
}

export function showErrorsForInputCustom(input, errors) {
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

export function showErrorsForElCustom(el, errors) {
    //console.log(input, errors);
    if (!validate.isEmpty(errors)) {
       el.html(errors);
    } 
}

export function resetInputValidate() {
    $("input, textarea, select").removeClass('has-success');
    $("input, textarea, select").removeClass('has-error');
    $(".messages-error").html('');
}


export function getFlatObject(object) {
    function iter(o, p) {
        if (Array.isArray(o) ){
            o.forEach(function (a, i) {
                iter(a, p.concat(i));
            });
            return;
        }
        if (o !== null && typeof o === 'object') {
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


export async function getFlatObjectV2(object) {
    function iter(o, p) {
        if (Array.isArray(o) ){
            o.forEach(function (a, i) {
                iter(a, p.concat(i));
            });
            return;
        }
        if (o !== null && typeof o === 'object') {
            Object.keys(o).forEach(function (k) {
                iter(o[k], p.concat(k));
            });
            return;
        }
        path[p.join('.')] = o;
    }

    var path = {};
    iter(object, []);
    return path;
}


export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


export function diff_hours(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(Math.round(diff));
  
 }


export function checkAuthRes(xhr){
    if(xhr.getResponseHeader('authorization')){
        let token = xhr.getResponseHeader('authorization').split(" ")[1];
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
        setCookie('token',token);
    }
}
