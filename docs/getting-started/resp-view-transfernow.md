## Responsive Web Design

Responsive Web Design detects and adapts to the screen size of the user’s device, presenting a display format that best matches the device’s screen size. This is achieved in part through breakpoints (or breakpoint ranges)-sizes or size ranges, measured in pixels, that are specified as the points at which the display changes, depending on and adapting to the size of the device’s screen.
<div>
<img class="image-center" src="../../assets/images/responsive-view-transfernow.png"
                                alt="mobile view">
<p class="block-quote-resp"> &#128221 <i> <strong>Note:</strong> There are differences between the mobile-focused and desktop user interfaces. Most of the screenshot samples in this document are desktop-focused, unless otherwise specified. </i></p>                                
</div>
<div id="slider">
    <input type="radio" name="slider" id="slide1" checked>
    <input type="radio" name="slider" id="slide2">
    <input type="radio" name="slider" id="slide3">
    <div id="slides">
        <div id="overflow">
            <div class="inner">
                <div class="slide slide_1">
                    <div class="slide-content">
                        <div class="slide-content-p">
                        <div class="card-body">
                         <img style="width: 30%;
    float: left;" src="../../assets/images/mobile-view-transfernow-img.png"
                                alt="mobile view">
                        <ul><li>320*479 Pixel Breakpoint for Mobile Phones</li>
                        </ul>
                        </div>
                        </div>
                        <img style="width:30%" src="../../assets/images/mobile-view-resp.png"
                                alt="mobile view">
                    </div>
                </div>
                <div class="slide slide_2">
                    <div class="slide-content">
                        <div class="slide-content-p">
                        <div class="card-body">
                        <img style="width: 30%;
    float: left;" src="../../assets/images/mobile-view-transfernow-img.png"
                                alt="mobile view">
                        <ul><li>480*767 Pixel Breakpoint For Plus-Sized Mobile Phones</li>
                        </ul>
                        </div>
                        </div>
                        <img style="width:33%" src="../../assets/images/tab-view.png" alt="tab view">
                    </div>
                </div>
                <div class="slide slide_3">
                    <div class="slide-content">
                        <div class="slide-content-p">
                        <div class="card-body">
                        <img style="width: 50%;
    float: left;" src="../../assets/images/mobile-view-transfernow-img.png"
                                alt="mobile view">
                        <ul><li>700 Plus Pixel Breakpoint for Larger Screens</li>
                        </ul>
                        </div>
                        </div>
                        <img style="width: 50%;" src="../../assets/images/desktop-view.png"
                                alt="desktop view">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="controls">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
    </div>
    <div id="bullets">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
    </div>
</div>

<div>
<p>There is persistent navigation, located at the top or left-hand side of the screen for the breakpoint (768 plus pixels) optimized for larger screens (such as those used for desktops, laptops, and tablets) and this is a client-configurable option; and the content is generally left-aligned and wider. For the breakpoints at 480 and below, some functions are hidden, disabled or collapsed.</p>
</div>

<style>
.tooltip-info {
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
}
.tooltip-info:hover {
    visibility: visible;
    opacity: 1;
}    
.tooltiptext-info{
    visibility: hidden;
    width: 200px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -100px;
    opacity: 0;
    transition: opacity 0.3s;
}
.tooltiptext-info::after{
    content: "";
    position: absolute;
    top: -10px;
    left:50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
}
.tooltip-info .icon-info{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #f60;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;

}
    #slider {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        text-align: center;
        height: 80%;
        margin-bottom: 10px;
    }
    #slider input[type=radio] {
        display: none;
    }
    #slider label {
        cursor: pointer;
        text-decoration: none;
    }
    #slides {
        position: relative;
        overflow: hidden;
        border-radius: 16px;
    }
    #overflow {
        width: 100%;
        overflow: hidden;
    }
    #slide1:checked~#slides .inner {
        margin-left: 0;
    }
    #slide2:checked~#slides .inner {
        margin-left: -100%;
    }
    #slide3:checked~#slides .inner {
        margin-left: -200%;
    }
    #slide4:checked~#slides .inner {
        margin-left: -300%;
    }
    #slides .inner{
        transition: margin-left 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
        width: 400%;
        line-height: 0;
        height: 595px;
    }
    #slides .slide {
        width: 25%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #fff;
    }
    .info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}
    #slides .slide_1 {
        background: transparent;
    }
    #slides .slide_2 {
        background: transparent;
    }
    #slides .slide_3 {
        background: transparent;
    }
    #slides .slide_4 {
        background: transparent;
    }
    #controls {
        z-index: 3;
        position: relative;
    }
    #controls label {
        transition: opacity 0.2s ease-out;
        display: none;
        width: 50px;
        height: 50px;
        opacity: .4;
    }
    #controls label:hover {
        opacity: 1;
    }
    #slide1:checked~#controls label:nth-child(2),
    #slide2:checked~#controls label:nth-child(3),
    #slide3:checked~#controls label:nth-child(4),
    #slide4:checked~#controls label:nth-child(1) {
        float: right;
        margin: 0 -50px 0 0;
        display: block;
    }
    #bullets {
    margin: 0 0 30px 0;
    position: relative;
    bottom: 39px;
    text-align: center;
    padding: 17px;
    /* border-bottom: 1px solid #8080803d; */
    }
    #bullets label {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: #ccc;
        margin: 0 10px;
    }
    #slide1:checked~#bullets label:nth-child(1),
    #slide2:checked~#bullets label:nth-child(2),
    #slide3:checked~#bullets label:nth-child(3),
    #slide4:checked~#bullets label:nth-child(4) {
        background: #444;
    }
    .block-quote {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
        margin: 10px;
    }
    .card-body {
        margin: 10px;
    }
    .card-body ul {
        list-style: none;
        text-align: left;
    }
    .card-body ul li::before {
        content: "\2022";
        font-size: 1em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
    .slide-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .slide-content-p{
        color: black;
        line-height: 1.5;
        margin: 0 0 14px;
        line-height: 24px;
    }
    .image-center {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }
    .block-quote-resp {
        padding: 1em;
        color: #6a737d;
        border-left: 0.375em solid #40a9ff;
        background: #e6f7ff;
        border-radius: 3px;
        position: relative;
        top: 55px;
    }  
   </style>