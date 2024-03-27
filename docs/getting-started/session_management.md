## Session Management

### Keeping banking session alive

Both iOS and Android platform broadcast touch events for a webview, so that the parent app can listen and keep the session alive.

### Handling session timeouts in TransferNow

TransferNow will call a function on the parent app when the session times out. Refer to the Figure shown in TN Mobile Integration Guide.

## Sample Pseudocode for Handling Session Management

### Android

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

### iOS

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