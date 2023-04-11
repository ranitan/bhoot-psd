$(document).ready(function () {
  $("#myform").validate({
    rules: {
      uname: {
        required: true,
        minlength: 5,
        maxlength: 10,
        pattern: /^(\w){5,10}$/,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        pattern: /^(\d){10}$/,
      },
      comments: {
        required: true,
      },
    },
    messages: {
      uname: "Enter Name",
      phone: "Enter valid Phone number",
      email: "Enter valid Email",
      comments: "Your Comments",
    },
  });
});
