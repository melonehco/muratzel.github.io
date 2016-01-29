Parse.initialize("EJ3swVy8iVnXKAO6XvT2LhGhYJ4BKLjFqRiuuxyX", "U5KZUB7IOm6JTwhdicpaBGxhVRtcJh2lOpHfH519");

var loginForm = $("#loginForm");
var signupForm = $("#signupForm");
var mainDiv = $("#mainDiv");
var passwordsDontMatchDiv = $('#passwordsDontMatchDiv');
var successfulSigninDiv = $('#successfulSigninDiv');

var loginBtn = $('#loginBtn');
var signupBtn = $('#signupBtn');
var createBtn = $('#createBtn');
var backBtn = $('#backBtn');
var continueBtn = $('#continueBtn');

function displayPage() {
    loginForm.addClass("hidden")
    signupForm.addClass("hidden");
    mainDiv.removeClass("hidden");
    passwordsDontMatchDiv.addClass("hidden");
    successfulSigninDiv.addClass("hidden");
}

function displayLoginForm() {
    loginForm.removeClass("hidden");
    signupForm.addClass("hidden");
    mainDiv.addClass("hidden");
    passwordsDontMatchDiv.addClass("hidden");
    successfulSigninDiv.addClass("hidden");
}

function displaySignupForm() {
    loginForm.addClass("hidden")
    signupForm.removeClass("hidden");
    mainDiv.addClass("hidden");
    passwordsDontMatchDiv.addClass("hidden");
    successfulSigninDiv.addClass("hidden");
}

function displaySuccessfulSignin() {
    loginForm.addClass("hidden")
    signupForm.addClass("hidden");
    mainDiv.addClass("hidden");
    passwordsDontMatchDiv.addClass("hidden");
    successfulSigninDiv.removeClass("hidden");
}

loginBtn.click(displayPage);
signupBtn.click(displaySignupForm);
createBtn.click(
    function () {
        var username = $("#username").val();
        var password = $('#password').val();
        var passwordConfirm = $('#passwordConfirm').val();
        var email = $('#email').val();

        if (password.localeCompare(passwordConfirm)) {
            $('#passwordConfirmDiv').addClass('has-error');
            passwordsDontMatchDiv.removeClass('hidden');
            return;
        }
        else {
            var newUser = new Parse.User();
            newUser.set("username", username);
            newUser.set("password", password);
            newUser.set("email", email);
            newUser.signUp(null, {
                success: function (user) {
                    alert("YYYYY");
                },
                error: function (user, error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
            displaySuccessfulSignin();
        }

    }
);
backBtn.click(displayLoginForm);
continueBtn.click(displayPage);

var currentUser = Parse.User.current();

if (currentUser) {
    displayPage();
}
else {
    displayLoginForm();
}




