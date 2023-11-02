## Security Integration and Configuration Options

### Zoning

Zoning is the process of defining, grouping, and isolating different networked components into one of three zones (un-trusted, semi-trusted, and trusted) based on similar risks, trust levels, exposures or security needs. For example:

-	Any component that exists on a public network is considered to live in an un-trusted zone. A web browser with public internet access is considered to live in an un-trusted zone.
-	Any component that exists between an un-trusted zone and a trusted private network (such as a corporate intranet) is considered to live in a semi-trusted zone (also referred to as the demilitarized zone, or DMZ). Web servers, email servers, and ftp servers are all examples of components that typically live in a semi-trusted zone.
-	Any component that exists on a corporate private intranet is considered to live in a trusted zone. Typically, a company will have many servers, databases or other components that are only accessible via the corporation’s private internal network.

In order for different zoned components to be able to communicate with each other, some components must first execute a series of zone-specific authentication requirements that mutually prove each component’s identity. In the case of the TN service, such authentication begins with the establishment of Secure Socket Layer Handshake between the Client Server and the Fiserv Server.

### SSL Transport Layer Security

Secure Socket Layer (SSL) is the most commonly used secure transport protocol over the internet. It provides an effective means of maintaining transaction confidentiality when performing client-to-server communication and is supported by all of the major browsers and web application containers (i.e., web servers).

SSL always begins with a handshake, which is a series of steps that both the client and server must successfully execute before sensitive application-level data can be exchanged. An SSL handshake requires two round trips between the client and server. 

The first round trip is used to trade information about what versions of the SSL protocol and cryptographic algorithms each supports, and to exchange some random values needed to compute a mutually agreed upon master secret that will be used to prove the freshness of the handshake. 

The second round trip is when the client authenticates the server only, called One-way Sever Authentication, or the client authenticates the server and the server then authenticates the client, called Mutual Server Authentication. 

Both roundtrips completing successfully results in an SSL channel being established between the client and server; application data is then allowed to flow between the client and server using this secure conduit.

### Digital Certificates

Successful One-Way and Mutual Server Authentication is dependent upon the use of digital certificates. A digital certificate is a credential issued by a trusted authority that binds a principal (e.g., Fiserv or some Client) to an identity that can be recognized and verified. The most notable fields in a digital certificate structure are as follows:

Subject—the name of the principal that the certificate was issued to 
Issuer—the name of the organization that issued the certificate (typically the CA) 
Public Key—the principal’s public key 
Signature Algorithm—the algorithm used to produce the certificate’s digital signature 
Valid From/To—when the validity of the certificate will expire
A digital certificate contains the principal’s public key. If you were to sign a digital document with your own personal private key, you would need to provide the recipient of that document with your public key so that the recipient could verify that the document was really signed by you (that is, verify your digital signature). 

Of course, how does the recipient of your document know that the public key you provided actually came from you? The answer is have your document also signed by a well-known issuing authority.

A root certificate is the digital certificate of an issuing authority—commonly referred to as a Certificate Authority (CA). A CA’s digital signature is present in all certificates that it signs on behalf of some principal. The root certificate is used to verify the integrity of any principal’s certificate, as issued by the CA. A CA signed certificate essentially means that the CA is vouching for the identity of the principal as described in the certificate (Subject), and that recipients of the principal’s certificate can trust the principal’s public key contained within the certificate.

The figure that follows shows how a digital certificate is represented in the Windows XP environment. Notice in the figure that the certificate was issued to qa.fundstransfer.cashedge.com (Subject) by Thawte (Issuer), and that the certificate is valid up until April 4, 2008 (Valid to). In order to verify the validity of the public key contained within this certificate, the recipient of this certificate would need use the issuer’s root certificate (which is typically pre-stored in a web server’s or browser’s Trusted Root Store) to verify the CA’s signature used to sign this certificate.

<center>

![image](../../assets/images/Security%20Integration%20and%20Configuration%20Options-1.png) <br />

</center>

Validation of a principal’s certificate includes checking the subject value and the certificate path. A certificate path is the chain of certificates starting with a certificate issued by the CA root certificate and ending with the target certificate that needs to be validated. The certificate length is the maximum depth of the certificate hierarchy to validate a certificate from the trusted root CA certificate to the principal’s certificate that needs to be validated.

The figures that follow show examples of two different SSL certificates. The certificate on the left was issued to principal businessonline.huntington.com, and the certificate on the right was issued to principal fhbonlinetest.fhb.com.

GeoTrust is the signing CA for the businessonline.huntington.com certificate, and Verisign is the signing CA for the fhbonlinetest.fhb.com certificate. Additionally, the GeoTrust signed certificate has a certificate length of 2, and the Verisign signed certificate has a certificate length of 3.

<center>

![image](../../assets/images/Security%20Integration%20and%20Configuration%20Options-2.png) <br />

</center>

Why the difference in certificate lengths? Verisign uses an intermediate certificate to sign a certificate issued to some principal. An intermediate certificate is a subordinate certificate issued by the trusted root specifically used to issue SSL server certificates. The result is a chain that begins at the trusted root CA, runs through the intermediate and ends with the SSL certificate issued to the principal. Such certificates are called chained root certificates. The usage of an intermediate certificate thus provides an added level of security as the CA does not need to issue certificates directly from the CA root certificate.

### Fiserv Supported Modes of Server Authentication

Fiserv takes a three-pronged approach to establishing a trust relationship between the Client Server and the Fiserv ePayments Client Integration Server:

-	Fiserv supports Mutual Server Certificate Authentication Only (also called Client Certificate Authentication). Fiserv uses Verisign, Thawte (www.thawte.com) and GeoTrust as its trusted Certificate Authority (CA), and all data passing through a client-server SSL connection is at least 128 bit encrypted.
-	Any access request must come from a Client Server whose IP addresses is contained in, and can be validated against, a Client supplied, server IP address list.
-	Fiserv trusts that the Client has pre-authenticated any end user accessing the service. This means that the Client is responsible for establishing the end user’s identity before that end user is allowed access to TN, and that all end user payload information passed from the Client’s Server to the Fiserv ePayments Client Integration Server is valid. More information regarding the secure message exchange of payload information can be found in Client/Fiserv Payload Secure Message Exchange.

The following figure shows the SSL steps taken for certificate authentication; (OW, MA) indicates that the step is required for both One-way Server and Mutual Server Authentication, and (MA) indicates that the step is required for Mutual Server Authentication only.

<center>

![image](../../assets/images/Security%20Integration%20and%20Configuration%20Options-3.png) <br />

</center>

The steps are as follows:

-	A Client trusted end user access the service via the Client’s web page.
-	(OW, MA) The Client Server requests an SSL connection to the Fiserv ePayments Client Integration (CI) Server.
-	(OW, MA) The Fiserv ePayments CI Server responds by sending its public key using a digital certificate previously signed by a trusted third-party certificate authority (CA).
-	(OW, MA) The Client Server checks the Fiserv ePayments CI Server’s certificate to determine whether or not the signing CA’s root certificate (containing the CA’s public key) is contained in its trusted root store. If the digital signature on the Fiserv ePayments CI Server's certificate matches the digital signature on one of the CA root certificates, then the Fiserv ePayments CI Server can be trusted.
-	(MA) The Fiserv ePayments CI Server now requests that the Client Server send its public key contained within its certificate.
-	(MA) The Fiserv ePayments CI Server checks Client Server’s certificate to determine whether or not the signing CA’s root certificate (containing the CA’s public key) is contained in its trusted root store. If the digital signature on the Client Server's certificate matches the digital signature on one of the root certificates, then the Client Server can be trusted.
-	(OW, MA) Session keys are securely negotiated between the Client Server and the Fiserv ePayments CI Server, the end result being that a secure and trusted communication channel has now been established between the servers.
-	(OW, MA) The Client’s Server generates a pre-master key which is encrypted with the Fiserv ePayments CI Server’s public key and then sends it back to the Fiserv ePayments CI Server.
-	(OW, MA) Both the Client Server and the Fiserv ePayments CI Server compute a master key and generate a secret symmetric key which will then be used to encrypt all messages between the two servers.
-	(OW, MA) The Client’s Server then posts the end user’s payload to the Fiserv ePayments CI server.
-	(OW, MA) The Fiserv ePayments CI Server validates the IP address of the Client’s Server and, if valid, saves the end user’s data on the Fiserv side. The Fiserv ePayments CI Server then generates a temporary application session key that it sends back to the Client’s Server.
-	The Client’s Server uses this temporary application session key as part of a URL redirect of the end user’s browser to the Fiserv ePayments Application Server. Failure of the Client to redirect the end user’s browser to the Fiserv ePayments Application Server within the transient application session key’s expiration time (typically 5 minutes) will result in the end user being presented with an error page.
-	The end user’s browser establishes an https session with the Fiserv ePayments Application Server. The Fiserv ePayments Application Server responds by sending back the Client’s TN landing page to the end user’s browser.

### Guidelines for Obtaining a CA Issued SSL Digital Server Certificate

Digital certificates can be purchased easily from any well-known CA; the following general guidelines should help the Client accomplish this task.

All well-known CAs allow a Client to apply for an SSL Digital Server Certificate online. Typically, this process begins with the Client filling out information about the company the certificate will be purchased for, contact information, and providing proof of valid company documentation (such as a company’s Articles of Incorporation).

FiservThe CA will also require that the Client provide a Certificate Signing Request (CSR). A CSR is a text file generated by a Client web server; it contains information about the organization. The CA will use the CSR to generate and validate certificates for the Client, and most web server vendors include support tools that can be used to generate this file. Below are some general guidelines for creating a CSR. Clients should review web server documentation specific to their server for the actual procedural steps needed to create a CSR.

-	A CSR file can usually be named anything the Client chooses.
-	The Client will typically be asked to enter a name for the key to be embedded in the certificate, and a corresponding private password. Take whatever steps are necessary to remember the password since it will be needed when the Client installs the CA issued certificate on a web server after the CA has sent back the certificate information.
-	When creating the CSR, you’ll be asked to enter your company’s name and associated organizational information. You’ll also need to enter the Common Name (CN) of the certificate. Typically, the CN value entered is domain based—meaning if you wanted to secure the domain movefunds money.com, then you would enter that domain as the CN value.
-	When requesting a certificate via a CA’s web site, the Client will be asked to submit the contents of the CSR file just created. The easiest way to do this is to open the CSR file as a text document, and then copy and paste the file data directly into the CA’s request form.

After a CA accepts the support documentation and CSR provided by the Client, the CA will then generate two digital certificates for the Client: a CA root certificate and the SSL Digital Server Certificate the Client (i.e., principal) has requested. The Client needs to install the server certificate on all web servers responsible for handling requests/response for the domain originally entered as the certificate CN value. The root certificate should be placed in each web server’s trusted root store (if not already there), and a copy should also be provided to Fiserv.

The actual installation of the server certificate is web server vendor dependent and, therefore, will vary. The usual generic install process usually resembles the following:

-	Open your web server’s Key Manager.
-	Find the key created as part of the CSR creation process and look for the option that allows you to install the associated key certificate.
-	Select the file sent to the CA and, when prompted, enter the (private) password created as part of the CSR process.
-	Follow all remaining instructions to the letter, and make sure to commit all changes when asked to do so.
                            
After the Client has installed the server certificate on all required web servers, SSL will need to be enabled for the domain the certificate was issued for. The way to do this is web server vendor specific, but most of the time it involves selecting the web site the Client wants to secure, accessing the web site’s security properties, and then selecting the option that will ensure that a secure channel is required when accessing this resource option is selected. 128-bit encryption should also be specified, as does the client certificate authentication method desired. Normally the Client would want to select the require client certificates option to ensure that only those servers providing the correct certificate will be granted access to the protected web site.
