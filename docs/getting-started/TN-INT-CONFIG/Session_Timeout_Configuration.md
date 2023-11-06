## Session Timeout Configuration

Session Timeout ConfigurationNo matter which page integration implementation the Client selects, Client consideration also needs to be given as to how to handle the possibility of an end user’s session timing out on the Fiserv side. Assume, for example, that an end user logs into the Client’s web site and then immediately accesses the service. Now assume the end user walks away from his or her computer for some period of time. Eventually, the end user’s session will timeout on the Fiserv side, the Client’s side—or both. 
With Full Control or Framed implementations, an end user session timeout on the Fiserv side will result in the browser redirecting the end user to a Client specified URL initially passed to Fiserv by the Client as part of an end user payload post. For the Pop-Up implementation, Fiserv first informs the end user, via a dialog box (see the figure that follows), that their session has expired on the Fiserv side and after the end user clicks OK, the dialog box closes and the pop-up window would then redirect to the Client specified URL.

<center>

![image](../../assets/images/Session-timeout-config.png)

</center>

The Client specified return URL is passed in as part of each end user’s payload post; Failure to pass a return URL in the end user’s payload will result in the end user being redirected to the Client’s specified Logout URL. 
Finally, Fiserv suggests that the Client configure a session timeout expiration period to be less than that used as the session timeout period on the client’s side.

<!-- theme: info -->

> _**Note:** The Client preference for this option is to be indicated in the DGF._


