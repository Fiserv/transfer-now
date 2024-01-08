## Digital Cerificates 

Successful One-Way and Mutual Server Authentication is dependent upon the use of digital certificates. A digital certificate is a credential issued by a trusted authority that binds a principal (e.g., Fiserv or some Client) to an identity that can be recognized and verified. The most notable fields in a digital certificate structure are as follows: 
&nbsp;

<table class="digi-table">
<tr>
<td>
<b>Subject </b>
</td>
<td>
the name of the principal that the certificate was issued to
</td>
</tr>
<tr>
<td>
<b>Issuer </b>
</td>
<td>
the name of the organization that issued the certificate (typically the CA) 
<tr>
<td>
<b>Public Key </b>
</td>
<td>
the principal’s public key 
</td>
</tr>
</td>
</tr>
<tr>
<td>
<b>Signature Algorithm </b>
</td>
<td>
the algorithm used to produce the certificate’s digital signature
</td>
</tr>
<tr>
<td>
<b>Valid From/To </b>
</td>
<td>
when the validity of the certificate will expire
</td>
</tr>
</table>

A digital certificate contains the principal’s public key. If you were to sign a digital document with your own personal private key, you would need to provide the recipient of that document with your public key so that the recipient could verify that the document was really signed by you. 

A root certificate is the digital certificate of an issuing authority—commonly referred to as a Certificate Authority (CA). A CA’s digital signature is present in all certificates that it signs on behalf of some principal. The root certificate is used to verify the integrity of any principal’s certificate, as issued by the CA. A CA signed certificate essentially means that the CA is vouching for the identity of the principal as described in the certificate (Subject), and that recipients of the principal’s certificate can trust the principal’s public key contained within the certificate. 
&nbsp;

<center>

![image](../../../assets/images/Certificate.png) <br/>


</center>
&nbsp;

Validation of a principal’s certificate includes checking the subject value and the certificate path. A certificate path is the chain of certificates starting with a certificate issued by the CA root certificate and ending with the target certificate that needs to be validated. The certificate length is the maximum depth of the certificate hierarchy to validate a certificate from the trusted root CA certificate to the principal’s certificate that needs to be validated. 

&nbsp;

<center>

![image](../../../assets/images/Certificates.png) <br/>


</center>
&nbsp;

GeoTrust is the signing CA for the businessonline.huntington.com certificate, and Verisign is the signing CA for the fhbonlinetest.fhb.com certificate. Additionally, the GeoTrust signed certificate has a certificate length of 2, and the Verisign signed certificate has a certificate length of 3. 

<!-- theme: info -->

> :memo: 
_**Note:** Verisign uses an intermediate certificate to sign a certificate issued to some principal.  
An intermediate certificate is a subordinate certificate issued by the trusted root specifically used to issue SSL server certificates._

&nbsp;

Click here to know more about [Guidelines for Obtaining a CA Issued SSL Digital Server Certificate](?path=docs/getting-started/TN-Integration-Guide/SSL-Guidelines.md)


&nbsp;

<div class="digital-certificates-button-container">
    <br>
    <div class="digital-certificates-left-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/SSL-Authentication.md">Back</a>
    </div>
    <div class="digital-certificates-right-button">
        <a href="?path=docs/getting-started/TN-Integration-Guide/Server-Authentication.md">Next</a>
    </div>
</div>
<style>
    .digital-certificates-button-container {
        position: relative;
        width: 100%;
        height: 30px;
        font-family: sans-serif;
        margin: 0px 15px;
    }
    .digital-certificates-left-button a,
    .digital-certificates-right-button a{
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
    .digital-certificates-left-button a{ 
        left: 0;
    }
    .digital-certificates-right-button a{
        right: 12px;
    }
    .digital-certificates-left-button a:hover,
    .digital-certificates-right-button a:hover {
        color: #f60;
        background-color: white;
        border: 2px solid #f60;
    }
    .card-body ul {
        list-style: none;
        padding-left: 20px;
    }
    .card-body ul li::before {
        content: "\2022";
        font-size: 1em;
        color: #f60;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
    .digi-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.digi-table td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}
.digi-table tr:nth-child(even){background-color: #f2f2f2;}
</style>