$(function () {
    /*$('#addAccount').click(function (e) {
		
        $('#addNewAccount').drawer('toggle');				
        $('#close-dw').focus()
        $('body').append('<div class="backdrop"></div>');
        e.preventDefault();
    });
    $("#close-dw").click(function () {
        $(".backdrop").css('display', 'none');
        $('#addAccount').focus();
        $('.backdrop').remove();
    }); */
	
});


$(document).ready(function () {
	
	$("#pageLoader, #errorMessage").hide();
	$("#trialError1, #trialError2").hide();
	
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
			var routNo = $("#routNo").val();
			var acctNo = $("#acctNo").val();
			if(accVal == 'Debit Card'){			
				$("#pageLoader").show();	
				setTimeout(function() {			  
					$('#addNewAccount').load('ajax/verify_debit_card.html');  
					$("#pageLoader").hide();
				}, 300);
			} else if((routNo =="000000000") && (acctNo !='111111111')){
				//alert("000000000");
				$("#pageLoader").show();           
				setTimeout(function() {                                                  
					$('#addNewAccount').load('ajax/verified_instant_success_bofa.html');  
					$("#pageLoader").hide();
				}, 300);
			}  else if((routNo =="111111111") && (acctNo =='000000000')){
				//alert("111111111");
				$("#pageLoader").show();           
				setTimeout(function() {                                                  
					$('#addNewAccount').load('ajax/suntrust_bank_nomfa.html');  
					$("#pageLoader").hide();
				}, 300);
			} else if((routNo =="111111111") && ((acctNo =='111111111') || (acctNo=='') || (acctNo !=''))){
				//alert("000011111");
				$("#pageLoader").show();           
				setTimeout(function() {                                                  
					$('#addNewAccount').load('ajax/suntrust_bank_mfa.html');  
					$("#pageLoader").hide();
				}, 300);
			}
			else {
				//alert("Else");
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
			window.location.href="transfer_funds.html";	
			$("#pageLoader").hide();
		}, 300);
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
    });
		
	/* trial deposit validation*/	
	
	$('#Text1, #Text2, #Text3, #Text4, #enterAccount, #reEnterAccount, #checkingNumber, #ReEntercheckingNumber, #cardNo, #cvvNo').keyup(function(e){	
		var val = $(this).val();   
		val = val.replace(/[^0-9]/g,'');										
		$(this).val(val);							
	});	
	
	
	$("#verifyingTrail").click(function(){                                                        
		if((($("#Text1").val() == '0') && ($("#Text2").val() == '')) && ((($("#Text3").val() == '0') && ($("#Text4").val() == '')))){                                           
			$("#trialError2").show();
			$("#trialError1").hide();
		}else if((($("#Text1").val() == '0') && ($("#Text2").val() == '0')) && ((($("#Text3").val() == '0') && ($("#Text4").val() == '0')))){                                        
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
	
	$("#kbaVerify").click(function(){		
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

	/* Hide and Show Tips on the banner */
	
	$('.info-message-toggle').click(function () {
        $('.hide-tip').slideToggle('fast');
        if ($(this).hasClass('active'))
            $(this).text('Hide Tip').attr("title","Hide Tip");
        else
            $(this).text('Show Tip').attr("title","Show Tip");
	        $(this).toggleClass('active');
    });	
	
	
	
    //Start:: Accordion Collapse-Expand Text on Cut off time page
    $("#feesCollapsible, #fundCollapsible, #cutOffCollapsible").on("show.bs.collapse", function () {
        $(this).find(".accordion-toggle span.sr-only").text("Collapse");
    });

    $("#feesCollapsible, #fundCollapsible, #cutOffCollapsible").on("hide.bs.collapse", function () {
        $(this).find(".accordion-toggle span.sr-only").text("Expand");
    });
    //End:: Accordion Collapse-Expand Text on Cut off time page

	

	//Start:: otp-verified page
	//for otp-verified page
	$('#seeList').click(function () {
		$(this).slideUp(0);	
		$(this).attr("aria-hidden", "true");
		$('#hideList').attr("aria-hidden", "false");
		$("#hideList").attr("aria-expanded", "false");
		setTimeout(function(){
			$('#hideList').focus();
		},10);
	});
	
	$('#hideList').click(function () {
		$('#collapseList').removeClass("in");
		$(this).attr("aria-hidden", "false");
		$(this).attr("aria-expanded", "false");
		$("#seeList").attr("aria-hidden", "false");
		$("#seeList").attr("aria-expanded", "false");
		$('#seeList').css('display', 'inline-block');
		$('#seeList').focus();
	});
	//End:: otp-verified page

	/*Get the Current year for Footer section */
	
	$("#currYear").text((new Date).getFullYear() ); 	
	
	
		
	
});