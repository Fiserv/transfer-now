## Session Keep-Alive Configuration

An end user logging into a Client website typically results in an end user session being created and managed by the Client web server; this session is invisible to the service via a Client website results in a different session being created and managed by the Fiserv web server; this session is invisible to the Client web server.

How then, can an end user’s Fiserv session be used to keep that same end user’s Client-side session alive, thus avoiding the possibility of a session timeout on the Client side without first timing out on the Fiserv side? The answer is by configuring a resource on the Client side that will be referenced by the Fiserv hosted pages.

In order to keep an end user’s initiating Client-side session alive, a URL is embedded into all of the Fiserv hosted pages that links to a blank 1x1 pixel image hosted on the Client’s web server. Fiserv will retrieve this image from the Client’s web server at periodic intervals via Fiserv hosted page code, or whenever a new Fiserv hosted page is displayed or refreshed. This essentially tricks the Client’s web server into thinking that the request came from the end user’s originating Client-side session.

For example, assume an end user logs into a Client web server (thus creating a new Client-side session) and that the end user is then presented with a browser page composed of images loaded from that same web server’s image deployment directory called client_app/images. Assume also that this directory contains a blank 1x1 pixel called keepalive.gif. The end user now clicks on a link that allows him/her to access the service. When the Fiserv web server serves up the requested page, that page contains a link to the keepalive.gif image contained in the Client’s client_app/images directory:

[https://www.someclient.com/client_app/images/keepalive.gif](https://www.someclient.com/client_app/images/keepalive.gif)

Thus, to the Client’s web server it looks as if the image is being retrieved via the end user’s initiating session and, therefore, will flag the end user’s session as still being active.

If a gif is not available on the Client web server responsible for creating the end user’s original session (i.e., a different server is used to manage images), a user’s session can still be kept alive via a URL that returns an empty page as long as the URL points to a resource hosted on that same web server. An example of such a URL might be:

![https://www.someclient.com/client_app/jsp/keepAlive.jsp](https://www.someclient.com/client_app/jsp/keepAlive.jsp)


> :memo: _**Note:** The Client preference for this option is to be indicated in the DGF._


