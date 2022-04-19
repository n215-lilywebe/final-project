
var homeContent = '<h1>home</h1>';
var aboutContent = '<h1>about</h1>';
var productsContent = '<h1>products</h1>';
var contactContent = '<h1>contact</h1>';


export function modelPageName(pgName) {
    // $("#app").html(eval(pgName));

    if (pgName == "homeContent") {
        $("nav a, .logo").removeClass("other").addClass("home");
        $(".not-home").removeClass("not-home").addClass("home");

    }
    else {
        $("nav a, .logo").removeClass("home").addClass("other");
        $(".not-home").removeClass("home").addClass("not-home");

    }

    try {
        eval(pgName);
        $("#app").html(eval(pgName));
    }
    catch (e) {
        console.log("hello", e);
    }
}
