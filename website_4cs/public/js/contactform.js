jQuery(document).ready(function ($) {
  "use strict";

  //Newsletter
  $('form.subscribeForm').submit(function () {
    console.log($('[name="footer-subscribe-email"]').val());
    if ($('[name="footer-subscribe-email"]').val()) {
      $('[name="footer-subscribe-email"]').attr('disabled', true);
      $('[name="footer-subscribe-button"]').val("Sending...")
        .attr("disabled", true);
      erpnext.subscribe_to_newsletter({
        email: $('[name="footer-subscribe-email"]').val(),
        callback: function (r) {
          if (!r.exc) {
            $('[name="footer-subscribe-button"]').val(__("Added"))
              .attr("disabled", true);
          } else {
            $('[name="footer-subscribe-button"]').val(__("Error: Not a valid id?"))
              .addClass("btn-danger").attr("disabled", false);
              $('[name="footer-subscribe-email"]').val("").attr('disabled', false);
          }
        }
      });
    }
    else {
      $('form.subscribeForm.validation').html(__('Wrong Input')).show('blind');
    }
    return false;
  });

  //Contact
  $('form.contactForm').submit(function () {
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    f.children('input').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (!i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function () { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;
    else var str = $(this).serialize();

    console.log(str);

    frappe.send_message({
      subject: $('[name="subject"]').val(),
      sender: $('[name="email"]').val(),
      message: $('[name="message"]').val(),
      callback: function (r) {
        if (r.message === "okay") {
          $("#sendmessage").addClass("show");
          $("#errormessage").removeClass("show");
          $('.contactForm').find("input, textarea").val("");
        } else {
          $("#sendmessage").removeClass("show");
          $("#errormessage").addClass("show");
          $('#errormessage').html(msg);
          console.log(r.exc);
        }
      }
    }, this);
    return false;
  });

});
