
## SSO for Mobile

The below Figure represents the proposed sequence of calls via the SSO. See [SSO - Payload Secure Message Exchange](?path=docs/getting-started/TN-Integration-Guide/SSO-Guidelines/payload-secure-msg.md) to know more about the SSO process and the list of applicable SSO elements. 

&nbsp;
   <!-- <img style="display: block;
  margin-left: auto;
  margin-right: auto;
  width:50%;" src="../../../assets/images/ssoformobile.png"> -->
<center>

![Image](../../../assets/images/ssoformobile.png) <br />


</center>

&nbsp;

<!-- <style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:50%;
}
</style> -->

This leverages the TransferNow SSO built for online banking. The parent app will need to get that one-use SSO key from the existing middleware. The SSO key will then be appended to the URL to invoke TransferNow in the webview.  </br>
URLs would be confirmed during the implementation, clients continue to invoke the existing TransferNow URL and would internally get directed to the TransferNow UI. 



&nbsp;

## Sample Pseudocode for Invoking WebView

**Android**

```

WebView loadView = (WebView)eSignDetailView.findViewById(R.id.);
loadView.getSettings().setJavaScriptEnabled(true);
loadView.setWebChromeClient(new WebChromeClient());
loadView.loadUrl(<>);

```

**iOS**

```

- (void)viewDidLoad {
    
    [super viewDidLoad];
    NSURL *url = [NSURL URLWithString:@"<>"]; 
    NSURLRequest *urlRequest = [NSURLRequest requestWithURL:url]; 
    [self. responsiveUIWebView loadRequest:urlRequest]; 
    self. responsiveUIWebView .delegate = self;
 }


```

## Session Management

<b>Keeping banking session alive </b>

Both iOS and Android platform broadcast touch events for a webview, so that the parent app can listen and keep the session alive.
 

<b>Handling session timeouts in TransferNow </b>

TransferNow will call a function on the parent app when the session times out. 
 

## Sample Pseudocode for Handling Session Management 

**Android**

Create interface and expose “TransferNow” TimeOut method and annotate this method with @JavascriptInterface 

```

public class WebAppInterface {
   Context mContext;
   /** Instantiate the interface and set the context */
   WebAppInterface(Context c) { mContext = c; }
   /** Show a toast from the web page */
   @JavascriptInterface public void FTKTimeOut() {
      // Parent app can perform action based on time out
   }
}

```
Call following method on WebView 

``` 
loadView.addJavascriptInterface(new WebAppInterface(getActivity()), "FTKAndroidInterface"); 
```

**iOS**

Controller will extend UIWebViewDelegate and have the following delegate method implemented. 

```

- (BOOL)webView:(UIWebView *)webView
    shouldStartLoadWithRequest:(NSURLRequest *)request
                navigationType:(UIWebViewNavigationType)navigationType {
   if ([[[request URL] absoluteString] hasPrefix:@"FTKiOSInterface:"]) {
      // Call the given selector
      [self performSelector:@selector(FTKTimeOut)];
      // Cancel the location change
      return NO;
   }
   return YES;
}
- (void)FTKTimeOut {
   // Parent app can perform action based on time out
   NSLog(@"Inside FTKTimeOut ");
}


```

<div class="sso-for-mobile-button-container">
    <br>
    <div class="sso-for-mobile-left-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/transfernow-integration-guide.md">Back</a>
    </div>
</div>
<style>
    .sso-for-mobile-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .sso-for-mobile-left-button a{
        position: absolute;
        display: inline;
        border: 0px;
        background: rgb(255, 102, 0);
        color: rgb(255, 255, 255);
        padding: 8px 22px;
        cursor: pointer;
        border-radius: 4px;                                
        text-align: center;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    .sso-for-mobile-left-button a{ 
        left: 0;
    }
    .sso-for-mobile-left-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    .card-body
    {
        background:#f1f1f101;
        padding:1em;
    }
    .card-body ul 
    {
        list-style: none;
        padding-left: 20px;
    }
    .card-body ul li::before 
    {
        content: "\2022";
        font-size: 1em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        margin-bottom:10px;
    }
    </style>