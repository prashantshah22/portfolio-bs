$(document).ready(() => {
    $(".navbar ul li a").click((e) => {
        e.preventDefault();
        var href = e.target.hash;
        $("html").animate({
            scrollTop: $(href).offset().top,
        }, 1000, () => {
            window.location.hash = href;
        })
    });
});

$(document).ready(() => {
    $("#dob").datepicker({
        dateFormat: "dd-mm-yy",
        showAnim: "fold",
        duration: 1000,
    });
})
document.getElementById('createNowLink').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    var signupTab = new bootstrap.Tab(document.getElementById('signup_tab'));
    signupTab.show(); // Show the "Sign Up" tab
});