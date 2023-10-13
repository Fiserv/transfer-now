$(document).ready(function () {
		
	/* Activity Page Mobile and Desktop views */	
	
	$(window).on("load resize", function() {
		var width_new = $(window).width();
		if(width_new >= 481){			
			setTimeout(function() {		
				$('#activityDesktopMobileContent').load('ajax/activity_desktop.html');				
			}, 5);				
		} else if ( width_new <= 480 ) {
			setTimeout(function() {	
				$('#activityDesktopMobileContent').load('ajax/activity_mobile.html');
			}, 5);			
		}else{
			setTimeout(function() {		
				$('#activityDesktopMobileContent').load('ajax/activity_desktop.html');
			}, 5);			
		} 
	});
	
	$(window).on('resize',function(){
		location.reload();
	});	
	
	$('#popover').popover({
        html: true,
        title: function () {$("#popover-head").html();
        },
        content: function () {
            return $("#popover-content").html();
        }
    });
			
	
	/* Cancel and Edit recurring transfer	- Jack(KTP)*/
	
	$("#recurringCancelJack").click(function(){
		$('#canRecurringTrnJack').modal('show');
	});
	
	$("#cancelNextTransferJack").click(function(){
		$('#cancelThisTransferJack').modal('show');
	});
	
	$("#cancelAllTransferJack").click(function(){
		$('#canRecurringAllTrnJack').modal('show');
	});
					
	$("#allTransferCanceledJack").click(function(){
		$('#canRecurringAllTrnConfirmedJack').modal('show');                          
	});
	
	$("#nextTransferCanceledJack").click(function(){
		$('#cancelThisTransferConfirmedJack').modal('show');                           
	});
	
	$("#recurringEditTransfer, #recurringEditTransferJack").click(function(){
		$('#editRecurringTrnJack').modal('show');                           
	});
	
	$("#editNextTransferJack").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                                
			window.location.href="edit_next_transfer_ktp.html"     
			$("#pageLoader").hide();                                                             
		}, 300);	
	});
	
	$("#editAllTransferJack").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                            
			window.location.href="edit_all_transfer_ktp.html"; 
			$("#pageLoader").hide();                                                             
		}, 300);                                            
	});  
	
	
	/* My other accounts - Recurring Edit  */  
	
	
	$("#recurringCancelTD").click(function(){
		$('#canRecurringTrnTD').modal('show');
	});
	
	$("#cancelNextTransferTD").click(function(){
		$('#cancelThisTransferTD').modal('show');
	});
	
	$("#cancelAllTransferTD").click(function(){
		$('#canRecurringAllTrnTD').modal('show');
	});
					
	$("#allTransferCanceledTD").click(function(){
		$('#canRecurringAllTrnConfirmedTD').modal('show');                          
	});
	
	$("#nextTransferCanceledTD").click(function(){
		$('#cancelThisTransferConfirmedTD').modal('show');                           
	});
	
	$("#recurringEditTransferTD, #recurringEditTransferTDBtn").click(function(){
		$('#editRecurringTrnTD').modal('show');                           
	});
	
	$("#editNextTransferTD").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                                
			window.location.href="edit_next_transfer_other.html"     
			$("#pageLoader").hide();                                                             
		}, 300);	
	});
	
	$("#editAllTransferTD").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                            
			window.location.href="edit_all_transfer_other.html"; 
			$("#pageLoader").hide();                                                             
		}, 300);                                            
	});                     
	
	/* 	Cancel the pending transfer	*/
	
	$("#cancelPendingTransfer").click(function(){
		$('#cancelPendingTrn').modal('show');
	});
	
	$("#pendingTransferCanceled").click(function(){
		$('#cancelPendingTrnConfirmed').modal('show');
	});
	
	/* 	Stop the transfer	*/
	
	$("#stopTransfer").click(function(){
		$('#stopTrn').modal('show');
	});
	
	$("#stoppedTransfer").click(function(){
		$('#transferStopped').modal('show');
	});
	
	
	/* Cancel and Edit recurring transfer*/
	
	$("#recurringCancel").click(function(){
		$('#canRecurringTrn').modal('show');
	});
	
	$("#cancelNextTransfer").click(function(){
		$('#cancelThisTransfer').modal('show');
	});
	
	$("#cancelAllTransfer").click(function(){
		$('#canRecurringAllTrn').modal('show');
	});
					
	$("#allTransferCanceled").click(function(){
		$('#canRecurringAllTrnConfirmed').modal('show');                          
	});
	
	$("#nextTransferCanceled").click(function(){
		$('#cancelThisTransferConfirmed').modal('show');                           
	});
	
	$("#recurringEditTransferLink, #recurringEditTransferBtn").click(function(){
		$('#editRecurringTrn').modal('show');                           
	});
	
	$("#editNextTransfer").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                                
			window.location.href="edit_next_transfer.html"     
			$("#pageLoader").hide();                                                             
		}, 300);	
	});
	
	$("#editAllTransfer").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                            
			window.location.href="edit_all_transfer.html"; 
			$("#pageLoader").hide();                                                             
		}, 300);                                            
	});      
	
	$("#editTransferFuture, #editTransferFutureDate").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                            
			window.location.href="edit_transfer_future_date.html"; 
			$("#pageLoader").hide();                                                             
		}, 300);                                            
	});    
	
	$("#pendingTransferCanceledConfirmed, #notStoptransfer, #stoppedTransferConfirmed, #cancelTransferFuture, #allTransferNotCanceledJack, #nextTransferCanceledJackConfirmed, #allTransferCanceledJackConfirmed, #cancelHoldTransferMelodiDone, #clearFilter").click(function(){
		$("#pageLoader").show();           
		setTimeout(function() {                                                
			window.location.href="activity.html"     
			$("#pageLoader").hide();                                                             
		}, 300);  
	});
	
		/* Rejected Tranfer	*/
		
		$("#rejectedTransfer").click(function(){
			$('#rejectedTrn').modal('show');
		});
		
		
		/* Hold Tranfer	*/
		
		$("#cancelHoldTransfer").click(function(){
			$('#holdCancelTrn').modal('show');
		});
		
		$("#cancellingHoldTransfer").click(function(){
			$('#cancelThisTransferConfirmedMelodi').modal('show');
		});
		
		$("#currYear").text((new Date).getFullYear() );						

});


