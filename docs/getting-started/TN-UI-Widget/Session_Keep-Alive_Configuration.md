## Session Keep-Alive Configuration 

To keep an end user’s initiating Client-side session alive, a URL is embedded into all the Fiserv hosted pages that links to a blank 1x1 pixel image hosted on the Client’s web server. Fiserv will retrieve this image from the Client’s web server at periodic intervals via Fiserv hosted page code, or whenever a new Fiserv hosted page is displayed or refreshed. This essentially tricks the Client’s web server into thinking that the request came from the end user’s originating Client-side session. 

For example, assume an end user logs into a Client web server (thus creating a new Client-side session) and that the end user is then presented with a browser page composed of images loaded from that same web server’s image deployment directory called client_app/images. Assume also that this directory contains a blank 1x1 pixel called keepalive.gif. The end user now clicks on a link that allows him/her to access the service. When the Fiserv web server serves up the requested page, that page contains a link to the keepalive.gif image contained in the Client’s client_app/images directory: 

                                 https://www.someclient.com/client_app/images/keepalive.gif 

Thus, to the Client’s web server it looks as if the image is being retrieved via the end user’s initiating session and, therefore, will flag the end user’s session as still being active. 

If a gif is not available on the Client web server responsible for creating the end user’s original session (i.e., a different server is used to manage images), a user’s session can still be kept alive via a URL that returns an empty page as long as the URL points to a resource hosted on that same web server. An example of such a URL might be: 

                                    https://www.someclient.com/client_app/jsp/keepAlive.jsp 

<!-- theme: info -->

> :memo: _**Note:** The Client preference for this option is to be indicated in the DGF._

**To Know more visit the below Configuration:**

[Page Footer Configuration](?path=docs/getting-started/TN-UI-Widget/Page_Footer_Configuration.md)    
[Help Link Configuration](?path=docs/getting-started/TN-UI-Widget/Help_Link_Configuration.md)    
[Session Timeout Configuration](?path=docs/getting-started/TN-UI-Widget/Session_Timeout_Configuration.md)    
[Session Keep-Alive Configuration ](?path=docs/getting-started/TN-UI-Widget/Session_Keep-Alive_Configuration.md)  