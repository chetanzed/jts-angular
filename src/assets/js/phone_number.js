// ==================================================
// 
// jquery-input-mask-phone-number v1.0
//
// Licensed (The MIT License)
// 
// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>
//
// ==================================================

(function ($) {
    $.fn.usPhoneFormat = function (options) {
        var params = $.extend({
            format: 'xxx-xxx-xxxx',
            international: false,

        }, options);

        if (params.format === 'xxx-xxx-xxxx') {
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 13);
                    $(this).val(inputValue);
                }
            });
            $(this).on('keydown touchend', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                } else if (curchr == 8 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '13');
            });

        } else if (params.format === '(xxx) xxx-xxxx') {
            $(this).on('keydown touchend', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val('(' + curval + ')' + " ");
                } else if (curchr == 9 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '14');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 14);
                    $(this).val(inputValue);
                }
            });

        }else if (params.format === 'xxx-xxx') {
            $(this).on('keydown touchend', function (e) {
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + " ");
                } else if (curchr == 12 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + " ");
                }
                $(this).attr('maxlength', '7');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var  inputValue = String(inputValue.replace(/(^[a-z A-Z 0-9]{3})(^[a-z A-Z 0-9]{3})/, "$1 $2"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 7);
                    $(this).val(inputValue);
            });

        }
        else if (params.format === 'xxxx') {
            $(this).on('keydown touchend', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                $(this).attr('maxlength', '4');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var  inputValue = String(inputValue.replace(/(\d{4})/, "$1"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 4);
                    $(this).val(inputValue);
            });

        }else if (params.format === 'xxx') {
            $(this).on('keydown touchend', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                $(this).attr('maxlength', '3');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var  inputValue = String(inputValue.replace(/(\d{3})/, "$1"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 3);
                    $(this).val(inputValue);
            });

        }
        
        else if (params.format === 'xxxxxxxx') {
            $(this).on('keydown touchend', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                $(this).attr('maxlength', '8');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var  inputValue = String(inputValue.replace(/(\d{8})/, "$1"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 8);
                    $(this).val(inputValue);
            });

        }else if (params.format === 'xxxx-xx-xx') {
            $(this).on('keydown touchend', function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 4 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + '年');
                } else if (curchr == 7 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "月");
                }else if (curchr == 10 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "日");
                }
                $(this).attr('maxlength', '10');
            });
            $(this).bind('paste', function (e) {
                e.preventDefault();
                var inputValue = e.originalEvent.clipboardData.getData('Text');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    inputValue = String(inputValue.replace(/(\d{4})(\d{2})(\d{2})/, "($1) $2-$3"));
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 10);
                    $(this).val(inputValue);
                }
            });

        }
       
        }




    
    
}(jQuery));