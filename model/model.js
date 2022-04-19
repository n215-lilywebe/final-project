
var homeContent = `    <div class="hero">
<nav>
    <div class="logo">
        <img class="home" src="images/Group 2.png" alt="">
    </div>
    <div class="links">
        <a class="home" href="#home">home</a>
        <span>/</span>
        <a class="home" href="#about">about</a>
        <span>/</span>
        <a class="home" href="#products">gallery</a>
        <span>/</span>
        <a class="home" href="#contact">blog</a>
        <span>/</span>
        <a class="home" href="#services">contact</a>
    </div>
</nav>
<div class="header">
    <h1>Header goes here</h1>
</div>
<div class="sub-header">
    <h2>Less important text goes here</h2>
</div>
<div class="header-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt laudantium atque voluptatem
        explicabo iusto eius aliquam perferendis aspernatur reprehenderit obcaecati eum quaerat nulla tempora
        provident sed labore, laboriosam fuga.</p>
</div>
<a class="hero-button" href="#about">Read More</a>
</div>
<div class="quote">
<h2>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem
    aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Iste natus error sit voluptatem accusantium doloremque laudantium totam"</h2>
<h3>John Smith</h3>
<p>Corporation CEO, books author.</p>
</div>
<div class="event-section">
<h2>UPCOMING EVENTS:</h2>
<hr>
<div class="events">
    <div class="eventsum">
        <div class="date">
            <p class="day">06</p>
            <p class="month">JUN</p>
        </div>
        <div class="event-text">
            <h3>Sed et persipiatis </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div class="eventsum">
        <div class="date">
            <p class="day">30</p>
            <p class="month">JUL</p>
        </div>
        <div class="event-text">
            <h3>Sed et persipiatis </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div class="eventsum">
        <div class="date">
            <p class="day">30</p>
            <p class="month">AUG</p>
        </div>
        <div class="event-text">
            <h3>Sed et persipiatis </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div class="eventsum">
        <div class="date">
            <p class="day">23</p>
            <p class="month">NOV</p>
        </div>
        <div class="event-text">
            <h3>Sed et persipiatis </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div class="eventsum">
        <div class="date">
            <p class="day">23</p>
            <p class="month">DEC</p>
        </div>
        <div class="event-text">
            <h3>Sed et persipiatis </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
</div>
<div class="footer">
<div class="logo">
    <img src="images/Group 2.png" alt="">
</div>
<div class="info">
    <p>420 Smoke St. Los Angeles, CA 46318</p>
    <p>(213)-467-2627</p>
    <p>info@eventsy.com</p>
</div>
<div class="subscribe">
    <div class="entry">
        <input type="email" placeholder="Enter your email to join newsletter...">
    </div>
    <div class="subscribe-button">
        <a href="#home">SUBSCRIBE</a>
    </div>
</div>
<div class="socials">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
</div>
<div class="copyright">
    <p>Copyright 2019 eventsy. All rights reserved</p>
</div>
</div>`;
var aboutContent = `    <nav>
<div class="logo">
    <img class="home" src="images/Group 2.png" alt="">
</div>
<div class="links">
    <a class="home" href="#home">home</a>
    <span>/</span>
    <a class="home" href="#about">about</a>
    <span>/</span>
    <a class="home" href="#products">gallery</a>
    <span>/</span>
    <a class="home" href="#contact">blog</a>
    <span>/</span>
    <a class="home" href="#services">contact</a>
</div>
</nav>

<div class="hero-image-about">
</div>
<div class="about-content">
<h3>OUR HISTORY:</h3>
<hr>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    Nemo
    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur </p>
</div>



<div class="footer">
<div class="logo">
    <img src="images/Group 2.png" alt="">
</div>
<div class="info">
    <p>420 Smoke St. Los Angeles, CA 46318</p>
    <p>(213)-467-2627</p>
    <p>info@eventsy.com</p>
</div>
<div class="subscribe">
    <div class="entry">
        <input type="email" placeholder="Enter your email to join newsletter...">
    </div>
    <div class="subscribe-button">
        <a href="#home">SUBSCRIBE</a>
    </div>
</div>
<div class="socials">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
</div>
<div class="copyright">
    <p>Copyright 2019 eventsy. All rights reserved</p>
</div>
</div>`;
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
