$(document).ready(function () {
	
	$("#pageLoader, #errorMessage").hide();
	$("#trialError1, #trialError2").hide();
	$("#emptyNumber, #phoneVerified").hide();
	$("#preferencePhoneSuccess, #preferencePhoneResend").hide();
	$("#verifyEmptyNumber, #verifyResendSuccess").hide();
	$("#cashEdgeTrialError1, #cashEdgeTrialError2").hide();
	$("#visaTrialError1, #visaTrialError2").hide();
	
	$("#addAccount").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/add_external_account.html');				        
    });
	
	$("#addPersonsAccount").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/add_ktp_account.html');				        
    });
	
	$("#addAccountNext").click(function(){
		if ($('#addExternal').valid()){
			var accVal = $("#accountType").val();
			if(accVal == 'Debit Card'){
				$("#pageLoader").show();	
				setTimeout(function() {			  
					$('#addNewAccount').load('ajax/verify_debit_card.html');  
					$("#pageLoader").hide();
				}, 300);
			} else {
				$("#pageLoader").show();	
				setTimeout(function() {			  
					$('#addNewAccount').load('ajax/bank_or_instant.html');  
					$("#pageLoader").hide();
				}, 300);					
			}						  
		}
		else{
			return false;
		}
	});
	
	$("#addAccountCancel, #addKtpCancel").click(function(){
		$('#addNewAccount').drawer('toggle');	  
		$('.overlay').removeClass('backdrop'); 
	});
	
	$("#verifybankDeposits").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/verify_bank_deposit.html');
			$("#pageLoader").hide();
		}, 300);			        
    });
		
	$("#verifyInstant").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/verify_instantly.html');
			$("#pageLoader").hide();
		}, 300);			        
    });
	
	$("#backToVerification, #backToOptions, #backToOptionsKba").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/bank_or_instant.html');
			$("#pageLoader").hide();
		}, 300);			        
    });
		
	$("#sendTwoDeposits").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/verify_bank_two_small_deposit.html');
			$("#pageLoader").hide();
		}, 300);			        
    });
	
	$("#accountVerified").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').drawer('toggle');
			$('.overlay').removeClass('backdrop');	
			$("#pageLoader").hide();
		}, 300);
		window.location.href="transfer_funds.html";				        
    });
	
	$("#cashEdgeaccountVerified").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').drawer('toggle');
			$('.overlay').removeClass('backdrop');	
			$("#pageLoader").hide();
		}, 300);
		window.location.href="preferences.html";				        
    });
	
	$("#closeAlert").click(function(){
		//$('#addNewAccount').drawer('toggle');
		$('.overlay').removeClass('backdrop');		
    });
	
	$("#stopVerification").click(function(){
		$('.overlay').removeClass('backdrop');					  
		location.reload();		
    });
	
	$("#continueVerification, #verifyExtAcct").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {					  
			//$('#addNewAccount').drawer('toggle');
			$('.overlay').addClass('backdrop');	
			$("#pageLoader").hide();
		}, 300);	
    });
	
	$("#close-dw").click(function () {
		$('.overlay').removeClass('backdrop');	
        $('#addAccount').focus();
		//$('#addNewAccount').drawer('toggle');
    });
		
	/* trial deposit validation*/	
	
	$('#Text1, #Text2, #Text3, #Text4, #verifyCode, #phoneNumber, #preferenceVerifyCode, #verifyResend,#emailVerificationCode, #emailVerificationCode1').keyup(function(e){	
		var val = $(this).val();   
		val = val.replace(/[^0-9]/g,'');										
		$(this).val(val);							
	});							
						
	
	$("#verifyingTrail").click(function(){				
		if((($("#Text1").val() == '0') && ($("#Text2").val() == '0')) && ((($("#Text3").val() == '0') && ($("#Text4").val() == '0')))){			
			$("#trialError2").show();
			$("#trialError1").hide();
		}else if((( $('#Text1, #Text2')).val() == "") || (($('#Text3, #Text4')).val() == "")){			
			$("#trialError1").show();
			$("#trialError2").hide();
		}else {			
			$("#trialError1, #trialError2").hide();
			$("#pageLoader").show();	
			setTimeout(function() {			  			
				$('.overlay').addClass('backdrop');	
				$('#addNewAccount').load('ajax/verified_instant_success.html');	
				$("#pageLoader").hide();
			}, 300);			
		}				
	});	
		
	
	$("#fiservVerify").click(function(){		
		if((($("#cashEdgeText1").val() == '0') && ($("#cashEdgeText2").val() == '0')) && ((($("#cashEdgeText3").val() == '0') && ($("#cashEdgeText4").val() == '0')))){			
			$("#cashEdgeTrialError2").show();
			$("#cashEdgeTrialError1").hide();
		}else if((( $('#cashEdgeText1, #cashEdgeText2')).val() == "") || (($('#cashEdgeText3, #cashEdgeText4')).val() == "")){			
			$("#cashEdgeTrialError1").show();
			$("#cashEdgeTrialError2").hide();
		}else {			
			$("#cashEdgeTrialError1, #cashEdgeTrialError2").hide();
			$("#pageLoader").show();	
			setTimeout(function() {			  			
				$('.overlay').addClass('backdrop');	
				$('#addNewAccount').load('ajax/other_account_success.html');	
				$("#pageLoader").hide();
			}, 300);			
		}				
	});	
		
	$("#verifyDone").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').drawer('toggle');
			$('.overlay').removeClass('backdrop');	
			$("#pageLoader").hide();
		}, 300);	
		window.location.href = "transfer_funds.html?=trialBank";
    });
	
	/* Instant Verification */
	
	/*$("#kbaVerify").click(function(){		
		var kbauser = $("#verify_usrname").val();
		var kbapwd = $("#verify_pswd").val();
		$("#errorMessage").hide();
		if((kbauser=="one") && (kbapwd=="one")){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_one.html');
				$("#pageLoader").hide();
			}, 300);			
		}else if((kbauser=="two") && (kbapwd=="two")){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_two.html');
				$("#pageLoader").hide();
			}, 300);			
		} else if((kbauser=="three") && (kbapwd=="three")){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_three.html');
				$("#pageLoader").hide();
			}, 300);			
		} else if((kbauser=="four") && (kbapwd=="four")){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_four_q1.html');
				$("#pageLoader").hide();
			}, 300);			
		} else if((kbauser=="five") && (kbapwd=="five")){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_five.html');
				$("#pageLoader").hide();
			}, 300);			
		} else if((kbauser=="six") && (kbapwd=="six")){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_six.html');
				$("#pageLoader").hide();
			}, 300);			
		} else {
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$("#errorMessage").show();
				$("#pageLoader").hide();
			}, 300);					
		}								        
    });*/
	
	
	
	$("#kbaVerify").click(function(){		
		var kbauser = $("#verify_usrname").val();
		var kbapwd = $("#verify_pswd").val();
		$("#errorMessage").hide();
		alert("In")
		if((kbauser=="one") && (kbapwd=="one")){
			alert("one")
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verified_instant_success.html.html');
				$("#pageLoader").hide();
			}, 300);			
		}else if((kbauser=="two") && (kbapwd=="two")){
			alert("two")
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verify_instant_kba_two.html');
				$("#pageLoader").hide();
			}, 300);			
		} else {
			alert("else")
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$("#errorMessage").show();
				$("#pageLoader").hide();
			}, 300);					
		}								        
    });
	
	/* Verify Instantly FI Login  */
	
	$("#instantLogin input").blur(function(){
		var kbauser = $("#verify_usrname").val();
		var kbapwd = $("#verify_pswd").val();		
		if((kbauser!="") && (kbapwd!="")){
			$("#kbaVerify").removeAttr("disabled");
		} else{
			$("#kbaVerify").attr("disabled", "disabled");	
		}
	});
	
	/* MFA Single Radio */
	
	$('[name="mfaRadio"]').click(function(){
		if ($('[name="mfaRadio"]').is(':checked')){
			$("#kbaSuccess").removeAttr("disabled");
			$("#kbaSuccess").click(function(){	
				$("#pageLoader").show();	
				setTimeout(function() {			  
					$('#addNewAccount').load('ajax/verified_instant_success.html');
					$("#pageLoader").hide();
				}, 300);			        
			});
		}else{
			$("#kbaSuccess").attr("disabled", "disabled");	
		}
	});
	
	/* */
	
	/* MFA Double Radio */
	
	$('[name="mfa1Radio"]').click(function(){
		if (($('[name="mfa1Radio"]').is(':checked')) && ($('[name="mfa2Radio"]').is(':checked'))){
			$("#kba2Success").removeAttr("disabled");
			$("#kba2Success").click(function(){	
				$("#pageLoader").show();	
				setTimeout(function() {			  
					$('#addNewAccount').load('ajax/verified_instant_success.html');
					$("#pageLoader").hide();
				}, 300);			        
			});
		}else{
			$("#kba2Success").attr("disabled", "disabled");	
		}
	});
	
	
	
	/* MFA Single Question */
	
	$("input#verify_q1").blur(function(){
		var verify_q1 = $("#verify_q1").val();
		if(verify_q1!=""){
			$("#kbaSingleQuestionSuccess").removeAttr("disabled");			
		} else{
			$("#kbaSingleQuestionSuccess").attr("disabled", "disabled");
		}
	});	
	
	$("#kbaSingleQuestionSuccess").click(function(){
		var singleAnswer = $("#verify_q1").val();
		if(singleAnswer!=""){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verified_instant_success.html');
				$("#pageLoader").hide();
			}, 300);
		}
	});
	
	/* PIN Validation */
	
	$("#doubleQuestion input").blur(function(){
		var verify_ques1 = $("#verify_q1").val();
		if(verify_ques1!=""){
			$("#kbaDoubleQuestionSuccess").removeAttr("disabled");			
		} else{
			$("#kbaDoubleQuestionSuccess").attr("disabled", "disabled");
		}
	});	
	
	$("#kbaDoubleQuestionSuccess").click(function(){
		var verify_ques1 = $("#verify_q1").val();
		if(verify_ques1!=""){
			$("#pageLoader").show();	
			setTimeout(function() {			  
				$('#addNewAccount').load('ajax/verified_instant_success.html');
				$("#pageLoader").hide();
			}, 300);
		}
	});
	
	
	/* Two MFA - Text asnwer one after another page */
	
	$("input#first_q1").blur(function(){
		var first_q1 = $("#first_q1").val();
		if(first_q1!=""){
			$("#kbaFirstQuestion").removeAttr("disabled");						
		} else{
			$("#kbaFirstQuestion").attr("disabled", "disabled");
		}
	});	
	
	$("#kbaFirstQuestion").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/verify_instant_kba_four_q2.html');
			$("#pageLoader").hide();
		}, 300);	
	});	
		
	$("input#second_q2").blur(function(){
		var first_q1 = $("#second_q2").val();
		if(first_q1!=""){
			$("#kbaSecondQuestion").removeAttr("disabled");						
		} else{
			$("#kbaSecondQuestion").attr("disabled", "disabled");
		}
	});	
	
	$("#kbaSecondQuestion").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/verified_instant_success.html');
			$("#pageLoader").hide();
		}, 300);	
	});	
	
	
	/* MFA Captcha */
	
	$("input#captcha").blur(function(){
		var captcha = $("#captcha").val();
		if(captcha!=""){
			$("#kbaCaptchaSuccess").removeAttr("disabled");			
		} else{
			$("#kbaCaptchaSuccess").attr("disabled", "disabled");
		}
	});	
	
	$("#kbaCaptchaSuccess").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').load('ajax/verified_instant_success.html');
			$("#pageLoader").hide();
		}, 300);	
	});	

		
    //Satrt:: Accordion Collapse-Expand Text on Cut off time page
    $("#feesCollapsible, #fundCollapsible, #cutOffCollapsible").on("show.bs.collapse", function () {
        $(this).find(".accordion-toggle span.sr-only").text("Collapse");
    });

    $("#feesCollapsible, #fundCollapsible, #cutOffCollapsible").on("hide.bs.collapse", function () {
        $(this).find(".accordion-toggle span.sr-only").text("Expand");
    });
    //End:: Accordion Collapse-Expand Text on Cut off time page

    //Start::Prefrances page
    //---MOBILE Accordion
    var prfns_mobAccordion = $("#myabcac, #myotherac, #mydbtcard, #otherpplac, #email, #myfonumbs");
    prfns_mobAccordion.on("show.bs.collapse", function () {
        $(this).find(".accordion-toggle span.sr-only").text("Collapse");
    });
    prfns_mobAccordion.on("hide.bs.collapse", function () {
        $(this).find(".accordion-toggle span.sr-only").text("Expand");
    });

    //---DESKTOP Accordion
    var preferenceAccordion = $("#toggle1, #toggle2, #toggle3, #toggle4, #toggle5, #toggle6, #toggle7, #toggle8, #toggle9, #toggle10, #toggle11, #toggle12");
    preferenceAccordion.on("click", ".accordion-toggle.collapsed", function () {
        $(this).find('span.sr-only').text("Expand");
        $(this).addClass('expand')
    });
    preferenceAccordion.on("click", ".expand", function () {
        $(this).find('span.sr-only').text("Collapse");
        $(this).removeClass('expand');
    });
    //TR Collapsible in Desktop View
    $('.tr-accordion').click(function () {
        var ariastate = $(this).attr("aria-expanded");
        if (ariastate == "false") {
            $(this).find(".accordion-toggle span.sr-only").text("Collapse");
        }
        else {
            $(this).find(".accordion-toggle span.sr-only").text("Expand");
        }
    });
    //End::Prefrances page
    //Start:: otp-verified page
    //for otp-verified page
    $('#seeList').click(function () {
        $(this).slideUp(0);
        $("#seeList").attr("aria-hidden", "true");
    });

    $('#hideList').click(function () {
        $('#collapseList').removeClass("in");
        $("#seeList").attr("aria-hidden", "false");
        $("#seeList").attr("aria-expanded", "false");
        $('#seeList').css('display', 'block');
    });
    //End:: otp-verified page
	
	
	$('#seeListNew').click(function () {
        $(this).slideUp(0);
        $("#seeListNew").attr("aria-hidden", "true");
    });

    $('#hideListNew').click(function () {
        $('#collapseListNew').removeClass("in");
        $("#seeListNew").attr("aria-hidden", "false");
        $("#seeListNew").attr("aria-expanded", "false");
        $('#seeListNew').css('display', 'block');
    });
	
		
	/* Preference Page Mobile and Desktop views */	
	
	$(window).on("load resize", function() {
		var width_new = $(window).width();
		if(width_new >= 481){			
			setTimeout(function() {		
				$('#broswerViewChange').load('ajax/preference_desktop.html');
			}, 5);				
		} else if ( width_new <= 480 ) {
			setTimeout(function() {	
				$('#broswerViewChange').load('ajax/preference_mobile.html');
			}, 5);			
		}else{
			setTimeout(function() {		
				$('#broswerViewChange').load('ajax/preference_desktop.html');
			}, 5);			
		} 
	});
	
	$(window).on('resize',function(){
		location.reload();
	});		
		
	
/* Preferences - Verify and delete phone  - Model	*/	
	
	$("#otherAccountVerify, #otherAccountVerifyFiserv").click(function(){									
		$('#addNewAccount').drawer('toggle');			
		$('.overlay').addClass('backdrop');
		$('#addNewAccount').load('ajax/other_account_verify.html'); 						        
	});
	
	$('#phoneVerify, #phoneVerifyBtn').on('click', function(e){	
		$('#addNewAccount').drawer('toggle');			
		$('.overlay').addClass('backdrop');
		$('#addNewAccount').load('ajax/verify_phone_number.html'); 																																										
	});
	
	$("#verifyingPhoneNumber").click(function(){
		if(($("#verifyResend").val() == "") || ($("#verifyResend").val().length < 6)){
			$("#verifyEmptyNumber").show();
			return false;
		} else{			
			$("#verifyEmptyNumber").hide();													
			$("#verifyPhoneNumber").modal('show');
			$('#verify').load('ajax/verified_phone_number.html'); 
			return false; 								
		}
	});
		
	$("#verifyPhoneNext").click(function(){										
		$("#verifyPhoneNumber").modal('show');	
		$('#verify').load('ajax/resend_phone_number.html');   					
	});
		
	$("#verifyResendCode").click(function(){			
		$("#emptyNumber").hide();
		$("#verifyCode").val("");
		$("#verifyPhoneNumber").modal('show');		
		$('#verify').load('ajax/verify_phone_number.html'); 
		return false;														
	});	
	
	/* Doubt */
	
	$("#resendCode").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {	
			$("#verifyPhoneNumber").modal('hide');	
			$("#resendVerificationCode").modal('show');  					
			$("#pageLoader").hide();
		}, 300);			
	});
	
	$("#resendCodeDone").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {	
			$("#emptyNumber").hide();
			$("#verifyPhoneNumber").modal('show');	
			$("#resendVerificationCode").modal('hide');  				
			$("#pageLoader").hide();
		}, 300);			
	});		
	
	/* Doubt */
	
	$("#phoneNumberVerify").click(function(){
		if(($("#verifyCode").val() == "") || ($("#verifyCode").val().length < 6)){
			$("#emptyNumber").show();
			return false;
		} else{			
			$("#emptyNumber").hide();
			$("#pageLoader").show();	
			setTimeout(function() {	
			$("#verifyPhoneNumber").modal('hide');	
			$("#resendVerificationCode").modal('hide');
			$("#phoneVerified").modal('show');
			$('.overlay').removeClass('backdrop'); 
			$("#pageLoader").hide();
			}, 300);		
		}
	});
	
	$("#verficationDone").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {	
			$("#verifyPhoneNumber").modal('hide');	
			$("#resendVerificationCode").modal('hide');
			$('.overlay').removeClass('backdrop');  
			window.location.href="preferences.html";						
			$("#pageLoader").hide();
		}, 300);	
	});
		
	$("#phoneDelete").click(function(){												
		$("#deletePhoneNumber").modal('show');		  														
	});
	
	$("#deletingPhoneNumber").click(function(){					
		$("#deletePhoneNumber").modal('hide');	
		$("#phoneNumberdeleted").modal('show');		  																		
	});
	
	$("#notDeletingNumber").click(function(){			
		$("#deletePhoneNumber").modal('hide');												
	});
	
	$("#deletedNumber").click(function(){									
		$('#addNewAccount').drawer('toggle');															        
	});		
	
	// Adding phone number (Drawer)

	$("#addPhoneNumber").click(function(){		
		$("#noticeTCPA").modal('show');				  											
    });
	
	$("#closeTCPA").click(function(){		
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
		$('.overlay').addClass('backdrop');	
		$('#addNewAccount').load('ajax/add_phone_number.html');			  											
    });							
		
	$("#phoneCancel").click(function(){
		$('#addNewAccount').drawer('toggle');	
		$('#close-dw').focus();
		$('.overlay').removeClass('backdrop');							
	});
	
	
	/*	Preferences - Delete and Edit Account */

	$("#otherAccountDelete").click(function(){		
		$('#close-md').focus();		
		$("#deleteAcConf").modal('show');		  							
	});
		
	$("#accountDelete").click(function(){
		$(".myOtherAccountFiserv").hide();
		$("#verifyMyOtherAcctDeleted").modal('show');	
	});
	
	$("#accountNotDelete").click(function(){		
		$('#close-md').focus();		
		$("#deleteAcConf").modal('hide');		  					
	});
	
	/* Delete Verified Phone Number */
	
	$("#deleteVerfPhone").click(function(){			
		$("#deleteVerifiedPhoneNumber").modal('show');		  							
	});
	
	$("#dontDeleteVerifiedPhone").click(function(){				
		$("#deleteVerifiedPhoneNumber").modal('show');		  							
	});
	
	$("#yesDeleteVerifiedPhone").click(function(){	
		$(".verifiedNumber").hide(); 			
		$("#phoneNumberdeleted").modal('show');		  							
	});
	

	/* Delete Failed Phone Number */
	
	$("#deletePhoneFailed").click(function(){	
		$("#deleteFailedPhoneNumber").modal('show');		  							
	});
	
	$("#dontDeleteFailedPhone").click(function(){				
		$("#deleteFailedPhoneNumber").modal('hide');		  							
	});
	
	$("#yesDeleteFailedPhone").click(function(){	
		$(".failedVerificationNumber").hide(); 				
		$("#deleteSuccessPhoneNumber").modal('show');		  							
	});
	
	
	/* Delete Verify Phone Number */
	
	$("#verifyDelete").click(function(){			
		$("#deleteVerifyPhoneNumber").modal('show');		  							
	});
	
	$("#dontDeleteVerifyPhone").click(function(){				
		$("#deleteVerifyPhoneNumber").modal('hide');		  							
	});
	
	$("#yesDeleteVerifyPhone").click(function(){
		$(".needVerificationNumber").hide(); 				
		$("#verifyDeletedSuccessPhone").modal('show');		  							
	});
	
	
	/*  Unsubscribe */
	
	$("#unsubscribe").click(function(){				
		$("#pageLoader").show();	
		setTimeout(function() {		
			window.location.href="unsubscribe.html"	
			$("#pageLoader").hide();					
		}, 300);	  							
	});
	
	/* Add Email */
	
	$("#addEmail").click(function(){				
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/add_email.html');	  							
	});
	
	$("#cancelEmail, #emailAddedDone").click(function(){				
		$('#addNewAccount').drawer('toggle');
        $('.overlay').removeClass('backdrop');  							
	});
	
	$("#emptyEmail, #emailAdded").hide();
	
	$("#emailAdd").click(function(){
		if ($('#addingEmail').valid()){
			$("#pageLoader").show();	
		   setTimeout(function() {			
				$("#addEmailAdress, #emptyEmail").hide();				
				$("#emailAdded").show();
				$("#pageLoader").hide();				
			}, 300);
		} else {
			return false;
		}                                                                                                      
	});
	
	/* Delete Verified Email */
	
	$("#deleteUser1").click(function(){			
		$("#deleteEmailValidated").modal('show');		  							
	});
	
	$("#dontDeleteVerifiedEmail").click(function(){				
		$("#deleteEmailValidated").modal('hide');		  							
	});
	
	$("#yesDeleteVerifiedEmail").click(function(){		
		$(".emailSmith").hide(); 		
		$("#deletedSuccessVerifiedEmail").modal('show');		  							
	});
	
	/* Make Main Email Address */
	
	$("#makeMain").click(function(){			
		$("#ChangEmail").modal('show');		  							
	});
	
	$("#makeMainSave").click(function(){			
		$("#makeMainSuccess").modal('show');		  							
	});
	
	/* Email Verify */
	
	$("#emailVerify").click(function(){			
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/verify_email.html'); 							
	});
	
	/* Resend Verification Code in pending email */
		
	$("#resendCodePendingEmailBtn").click(function(){			
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/resend_verfication_code_email.html'); 							
	});
	
	$("#resentEmailCancel, #verifyEmailCancel, #verifyCancelPhone, #addPhoneCancel").click(function(){
		$('#addNewAccount').drawer('toggle');
        $('.overlay').removeClass('backdrop');		
	});
		
	/* Not Received Email Verification Code - Resend Code */ 
	
	$("#trialVerification").hide();
	$("#verifyEmailStep2, #verifyEmailEmptyNumber").hide();
	
	$("#notReceivedCode").click(function(){	
		$("#emailHeading").text("Verify Email Address");	
		$("#emailVerificationCode").val("");
		$("#verifyEmailStep2, #verifyEmailEmptyNumber").hide();	
		$("#pageLoader").show();	
		setTimeout(function() {			
			$("#trialVerification").show();
			$("#pageLoader").hide();				
		}, 300);						
	});
	
	$("#emailSubmit").click(function(){
		if ($('#verifyEmailBtn').valid()){
			$("#pageLoader").show();           
			setTimeout(function() {                                                  
				$("#verifyEmailStep2").show();
				$("#verifyEmailStep1").hide();
				$("#verifyEmailEmptyNumber").hide();
				$("#pageLoader").hide();             
			}, 300);  
		} else {
			return false;
		}                                                                                                      
	});

		
	/* Delete Verified Email */
	
	$("#deletePendingEmail").click(function(){			
		$("#deleteEmailPending").modal('show');		  							
	});
	
	$("#dontDeletePendingEmail").click(function(){				
		$("#deleteEmailPending").modal('hide');		  							
	});
	
	$("#yesDeletePendingEmail").click(function(){
		$(".emailJordan").hide(); 				
		$("#deletedSuccessPendingEmail").modal('show');		  							
	});
	
	
	/* Delete Master Card */
	
	$("#deleteMasterCard").click(function(){			
		$("#deleteDtCardConf").modal('show');		  							
	});
	
	$("#dnotDeleteMasterCard").click(function(){				
		$("#deleteDtCardConf").modal('hide');		  							
	});
	
	$("#yesDeleteMasterCard").click(function(){		
		$(".masterCard").hide(); 		
		$("#deleteSuccessDebitCard").modal('show');		  							
	});
	
	
	/* Delete Visa Card */
	
	$("#deleteVisaCard").click(function(){			
		$("#deleteVisaCardConf").modal('show');		  							
	});
	
	$("#dnotDeleteVisaCard").click(function(){				
		$("#deleteVisaCardConf").modal('hide');		  							
	});
	
	$("#yesDeleteVisaCard").click(function(){		
		$(".visaCard").hide(); 			
		$("#deleteSuccessVisaDebitCard").modal('show');		  							
	});
	
	
	/* Add Debit Card */ 
	
	$("#addDebitCard").click(function(){
		$('#addNewAccount').drawer('toggle');		
		$('#close-dw').focus();		
		$('.overlay').addClass('backdrop');
		$('#addNewAccount').load('ajax/add_external_account.html');						
	});
	
	$("#cancelAddDebit, #cancelEditVisaDebit, #cancelEditMasterDebit,#masterCardSuccessDone, #visaCardSuccessDone, #cancelEditActiveVisaDebit").click(function(){				
		$('#addNewAccount').drawer('toggle');
        $('.overlay').removeClass('backdrop');  							
	});
	
	$("#debitCardAdded").hide();
                
	$("#saveDebitCard").click(function(){
		if ($('#addDebitCardForm').valid()){
			$("#pageLoader").show();           
			setTimeout(function() {   
				var num= $("#cardNo").val();
				num = num.slice(0,-12);
				$("#debitCardNumber").text("****" + num);                                               
				$("#debitCardAdded").show(); 
				$("#debitCardSection").hide();    
				$("#pageLoader").hide();
			}, 300);
		}else {
			return false;
		} 
		
		$("#cardAddedDone").click(function(){
			$("#pageLoader").show();
			setTimeout(function() {                                                                                                
				location.reload();
			}, 300);  
		});                                                                                                     
	});
	
	/*	Edit Master Debit card*/
	
	$("#masterCardEditSuccess, #visaCardEditSuccess").hide();
	$("#masterDebitCard, #visaDebitCard").show();
	
	$("#editMasterCard").click(function(){
		$('#addNewAccount').drawer('toggle');		
		$('#close-dw').focus();		
		$('.overlay').addClass('backdrop');
		$('#addNewAccount').load('ajax/edit_master_debit_card.html');							
	});			
	
	$("#saveEditMasterDebit").click(function(){
		$("#pageLoader").show();
		setTimeout(function() {						
			$("#masterDebitCard").hide();		
			$("#masterCardEditSuccess").show();
			$("#pageLoader").hide();				
		}, 300);			
	});
	
	$("#saveEditVisaDebit").click(function(){
		$("#pageLoader").show();
		setTimeout(function() {						
			$("#visaDebitCard").hide();		
			$("#visaCardEditSuccess").show();
			$("#pageLoader").hide();				
		}, 300);			
	});
	
	
	/* Delete active my other account */
	
	$("#activeMyOtherAcctDelete1").click(function(){
		$("#deleteAcConf1").modal('show');	
	});
	
	$("#deleteOtherAcct1").click(function(){
		$(".myOtherAccountTdBank").hide(); 
		$("#activeMyOtherAcctDeleted1").modal('show');	
	});
	
	$("#activeMyOtherAcctDelete2").click(function(){
		$("#deleteAcConf2").modal('show');	
	});
	
	$("#deleteOtherAcct2").click(function(){
		$(".myOtherAccountChaseBank").hide();
		$("#activeMyOtherAcctDeleted2").modal('show');	
	});
	
	$("#activeMyOtherAcctDelete2").click(function(){
		$("#deleteAcConf2").modal('show');	
	});
	
	
	$("#deleteOtherAcct3").click(function(){
		$(".myOtherAccountEtradeBank").hide();
		$("#activeMyOtherAcctDeleted3").modal('show');	
	});
	
	$("#activeMyOtherAcctDelete3").click(function(){
		$("#deleteAcConf3").modal('show');	
	});
	
	
	/* Delete active Other Person Account */
	
	$("#otherPersonAccountDelete1").click(function(){
		$("#deleteAcConfOtherPerson1").modal('show');	
	});
		
	$("#deleteOtherPersonAcct1").click(function(){
		$(".otherAccountJack").hide(); 
		$("#otherPersonAcctDeleted1").modal('show');	
	});
	
	$("#otherPersonAccountDelete2").click(function(){
		$("#deleteAcConfOtherPerson2").modal('show');	
	});
		
	$("#deleteOtherPersonAcct2").click(function(){
		$(".otherAccountMelodi").hide(); 
		$("#otherPersonAcctDeleted2").modal('show');	
	});
	
	
	/* Edit active Other People's Accounts - KTP */
	
	$("#otherPersonAccountEdit1").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/edit_other_person_jack.html');	
	});
	
	$("#otherPersonAccountEdit2").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/edit_other_person_melodi.html');	
	});
		
    /* Edit active My other account */	
	
	$("#activeMyOtherAcctEdit1").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/edit_account_td_bank.html');	
	});
	
	$("#editSaveTd").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			
			$('#addNewAccount').load('ajax/edit_account_success_td_bank.html');
			$("#pageLoader").hide();				
		}, 300);				
	});		
	
	$("#activeMyOtherAcctEdit2").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/edit_account_chase_bank.html');	
	});
	
	$("#editSaveChase").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			
			$('#addNewAccount').load('ajax/edit_account_success_chase_bank.html');	
			$("#pageLoader").hide();				
		}, 300);	
		
	});
	
	$("#activeMyOtherAcctEdit3").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/edit_account_etrade_bank.html');	
	});
	
	$("#editSaveEtrade").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			
			$('#addNewAccount').load('ajax/edit_account_success_etrade_bank.html');
			$("#pageLoader").hide();				
		}, 300);				
	});
	
	
		
	$("#otherAccountEdit").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/edit_account_fiserv_bank.html');	
	});
	
	$("#editSaveFiserv").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			
			$('#addNewAccount').load('ajax/edit_account_success_fiserv_bank.html');
			$("#pageLoader").hide();				
		}, 300);				
	});
	
	$("#editCancelChase, #editCancelTd, #editCancelEtrade, #editCancelFiserv").click(function(){
		$('#addNewAccount').drawer('toggle');	  
		$('.overlay').removeClass('backdrop'); 
	});
	
	
	/* Resend verifcation code in pending email  */

	/*$("#trialVerification1").show();
	$("#resendCodePendingEmailSuccess, #verifyEmailEmptyNumber1").hide();
	$("#emailHeading1").text("Validation Code Resent");	
	
	$("#notReceivedCode1").click(function(){	
		$("#emailHeading1").text("Validation Code Resent");			
		$("#emailVerificationCode1").val("");
		$("#resendCodePendingEmailSuccess, #verifyEmailEmptyNumber1").hide();	
		$("#pageLoader").show();	
		setTimeout(function() {			
			$("#trialVerification1").show();
			$("#pageLoader").hide();				
		}, 300);						
	});
	
	$("#emailSubmit1").click(function(){
		if ($('#verifyEmail').valid()){
			$("#pageLoader").show();           
			setTimeout(function() {                                                  
				$("#resendCodePendingEmailSuccess").show();
				$("#verifyEmailEmptyNumber1, #resendCodePendingEmail").hide();
				$("#pageLoader").hide();
			}, 300);
		} else {
			return false;
		}                                                                                                      
	});*/

	
	$("#emailSuccessDone, #emailSuccessDone1").click(function(){				
		$("#pageLoader").show();           
		setTimeout(function() {   
			location.reload();	
		},300);						
	});	
	
	/* Other person account success	*/
	
	$("#melodiSuccessDone, #jackSuccessDone, #verifyLater").click(function(){		
		$('#addNewAccount').drawer('toggle');
		$('.overlay').removeClass('backdrop');
	});
	
	/*	 Verify Debit card	*/
	
	$("#verifyVisaCardBtn, #verifyVisaCard").click(function(){
		$('#addNewAccount').drawer('toggle');
		$('#close-dw').focus();
        $('.overlay').addClass('backdrop');
        $('#addNewAccount').load('ajax/verify_debit_card.html');	
	});
	
	$("#verifyingVisaDebitCard").click(function(){                    
		if((($("#visaText1").val() == '') || ($("#visaText2").val() == '')) || ((($("#visaText3").val() == '') || ($("#visaText4").val() == '')))){                                   
			$("#visaTrialError1").show();                                                                                      
		}else if((($("#visaText1").val() == '0') && ($("#visaText2").val() == '0')) || ((($("#visaText3").val() == '0') && ($("#visaText4").val() == '0')))){                                  
			$("#visaTrialError1").show();                                                                                      
		}else{
			$("#pageLoader").show();           
			$("#visaTrialError1").hide();
			setTimeout(function() {                                                                                                
				$('.overlay').addClass('backdrop');           
				$('#addNewAccount').load('ajax/verified_debit_card_success.html');    
				$("#pageLoader").hide();
			}, 300);
		}
                       

		
		/* To hide the error field on blur of inputs */
	
		$("#inputFields input").blur(function(){
			if((($("#visaText1").val() == '') || ($("#visaText2").val() == '')) || ((($("#visaText3").val() == '') || ($("#visaText4").val() == '')))){			
				$("#visaTrialError1").show();						
			}else {
				$("#visaTrialError1").hide();						
			}		
		});
		
	});	
	
	$("#visaAccountVerified").click(function(){
		$("#pageLoader").show();	
		setTimeout(function() {			  
			$('#addNewAccount').drawer('toggle');
			$('.overlay').removeClass('backdrop');	
			$("#pageLoader").hide();
		}, 300);
    });
	
	/*	My Other Accounts  - Hold    */				
	
	$("#holdAcct").click(function(){
		$("#onHoldOtherAccount").modal('show'); 
	});
		
	/*	My ABC Bank Accounts  - suspended    */				
	
	$("#suspendedAcct").click(function(){
		$("#suspendedProfile").modal('show'); 
	});		
		
	/* Failed phone number verfication */	
			
	$("#failedVerficationPhone").click(function(){			
		$("#failedPhoneNumber").modal('show');		  							
	});
		
	/* Phone formatting	*/
	
	//phone();
	 
	/* $("#phoneNumber").on('blur', function(){
		 phone();
	 });*/
	 
	function phone(){
		var phone_val = $('#phoneNumber').val();
		var phone_len = $('#phoneNumber').val().length;						
		if(phone_len == 10){
			var res0 = phone_val.substr(0, 3);
			var res1 = phone_val.substr(3, 3);
			var res2 = phone_val.substr(6, 4);
			var split_result =res0 + "-" +res1+"-"+ res2;
			$('#phoneNumber').val(split_result);											
		}		
	}
	
	 
	/*	Formatting the debit card */	
	
	$("#cardNo").on('blur', function(){
		var card_len = $('#cardNo').val().length;						
		if(card_len == 16){								
			$("#masterImage").hide();	
		} else{
			$("#masterImage").show();
		}		
	}); 
	
	
	/* Delete Expired Visa Card */
	
	$("#deleteExpiredVisaCard").click(function(){			
		$("#deleteExpiredVisaCardConf").modal('show');		  							
	});
	
	$("#dnotDeleteExpiredVisaCard").click(function(){				
		$("#deleteExpiredVisaCardConf").modal('hide');		  							
	});
	
	$("#yesDeleteExpiredVisaCard").click(function(){		
		$(".expiredCard").hide(); 			
		$("#deleteExpiredSuccessVisaDebitCard").modal('show');		  							
	});
	
	
	/* Edit expired card  */
	
	$("#editExpiredVisaCard").click(function(){
		$('#addNewAccount').drawer('toggle');		
		$('#close-dw').focus();		
		$('.overlay').addClass('backdrop');
		$('#addNewAccount').load('ajax/edit_expired_debit_card.html');							
	});	
	
	/* Suspended card  */
	
	$("#suspendedCard").click(function(){
		$("#suspendedCardModal").modal('show'); 
	});	
	
	
	/*  Active visa card  */
	
	$("#editActiveVisaCard").click(function(){
		$('#addNewAccount').drawer('toggle');		
		$('#close-dw').focus();		
		$('.overlay').addClass('backdrop');
		$('#addNewAccount').load('ajax/edit_active_visa_debit_card.html');							
	});			
	
	$("#saveEditActiveVisaDebit").click(function(){
		$("#pageLoader").show();
		setTimeout(function() {						
			$("#masterDebitCard").hide();		
			$("#masterCardEditSuccess").show();
			$("#pageLoader").hide();				
		}, 300);			
	});
	
	
	$("#deleteActiveVisaCard").click(function(){			
		$("#deleteActiveVisaCardConf").modal('show');		  							
	});
	
	$("#dnotDeleteActiveVisaCard").click(function(){				
		$("#deleteActiveVisaCardConf").modal('hide');		  							
	});
	
	$("#yesDeleteActiveVisaCard").click(function(){		
		$(".activeVisaCard").hide(); 		
		$("#deleteSuccessActiveVisaCard").modal('show');		  							
	});
	
	
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})
	
	$("#currYear").text((new Date).getFullYear() );
	
	/*  Delete suspended card  */
	
	
	$("#deleteSuspendedCard").click(function(){                                     
		$("#deleteSuspendedCardConf").modal('show');                                                                                                                                             
	});
	
	$("#dnotDeleteSuspendedCard").click(function(){                                                           
		$("#deleteSuspendedCardConf").modal('hide');                                                                                                                                               
	});
	
	$("#yesDeleteSuspendedCard").click(function(){                             
		$(".suspendedCard").hide();                      
		$("#deleteSuccessSuspendedCard").modal('show');                                                                                                                                       
	});

	
});