## Responsive Web Design

Responsive Web Design detects and adapts to the screen size of the user’s device, presenting a display format that best matches the device’s screen size. This is achieved in part through breakpoints (or breakpoint ranges)-sizes or size ranges, measured in pixels, that are specified as the points at which the display changes, depending on and adapting to the size of the device’s screen. 

&nbsp;

<center>

![image](https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/responsiveUIScreens.jpg)

</center>

&nbsp;

<!-- theme: info -->

> :memo: _**Note:** There are differences between the mobile-focused and desktop user interfaces. Most of the screenshot samples in this document are desktop-focused, unless otherwise specified. 

&nbsp;

<!-- theme: info -->

> :memo: **Note:** The screenshot samples in this document are strictly representational; they are provided as examples only.




<div class="card-container">
        <div style="margin: 5px">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/320MobileViewpng.png">
        </div>
        <div style="margin: 5px">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/480MobileView.png">
        </div>
        <div style="margin: 5px">
            <img src="https://raw.githubusercontent.com/Fiserv/transfer-now/develop/assets/images/desktopview.png">
        </div>
    </div>



&nbsp;

There is persistent navigation, located at the top or left-hand side of the screen for the breakpoint (768 plus pixels) optimized for larger screens (such as those used for desktops, laptops, and tablets) and this is a client-configurable option; and the content is generally left-aligned and wider. 
For the breakpoints at 480 and below, some functions are hidden, disabled or collapsed.


<style>
    .card-container {
            display: flex;
            justify-content: space-between;
        }
        .card {
            border: 1px solid black;
            border-radius: 8px;
            margin: 5px;
            display: flex;
            flex-direction: column;
        }
</style>