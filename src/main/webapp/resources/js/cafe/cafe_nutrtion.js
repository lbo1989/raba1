$(document).ready(function () {
	
	$('#searchbtn').on('click',function() {
		console.log("검색버튼");
		$('#tempmode').val(1);
		$('#searchform').submit();
	})
	let mode = $('#tempmode').val();
	if(mode == 0) {
		console.log("mode가 0일때");
		$('#myInfo').css('display', 'block');
		$('#infoAndMenu').css('display', 'none');
	} else {
		console.log("mode가 1일때");
		$('#myInfo').css('display', 'none');
		$('#infoAndMenu').css('display', 'block');
	}
	
    $(document).on('click', '#personinfoBtn', function () {
        console.log("저장 버튼클릭");
        let age = $(this).parent().siblings().eq(0).children().children().eq(0).children('#age').val();
        console.log("age: ", age);
        let gender = $('input:radio[name="gender"]:checked').val();
        console.log("gender", gender);
        let cm = $(this).parent().siblings().eq(0).children().children().eq(2).children('#cm').val();
        console.log("cm: ", cm);
        let kg = $(this).parent().siblings().eq(0).children().children().eq(3).children('#kg').val();
        console.log("kg: ", kg);
        let activity = $('input:radio[name="activity"]:checked').val();
        console.log("activity", activity);
        
        if( age == ""){ 
            alert("나이를 입력해주세요");
            return;
        }else if(gender == ""){
            alert("성별을 선택해주세요");
            return;
        }else if(cm == ""){
            alert("키를 입력해주세요");
            return;
        }else if(kg == ""){
            alert("몸무게를 입력해주세요");
            return;
        }else if(activity == ""){
            alert("신체활동 수준설정을 선택해주세요");
            return;
        }else{
           $('#myInfo').css('display', 'none');
           $('#infoAndMenu').css('display', 'block');
            /*필요한 칼로리 총량 계산식*/
            
            if (gender == "male") {
               var mval1 = 13.75 * kg;
               var mval2 = 5.0 * cm;
               var mval3 = 6.8 * age;
               var mresult = 66.5 + mval1 + mval2 - mval3;
               var mval4 = activity;
            } else if (gender == "female") {
               var mval1 = 9.6 * kg;
                var mval2 = 1.85 * cm;
                var mval3 = 4.7 * age;
                var mresult = 655.1 + mval1 + mval2 - mval3;
                var mval4 = activity;
            }
            switch (mval4) {
            case "inactive":
               MyCalorie = mresult * 1.3;
               break;
            case "rowactive":
               MyCalorie = mresult * 1.5;
               break;
            case "activity":
               MyCalorie = mresult * 1.7;
               break;
            case "veryactivity":
               MyCalorie = mresult * 1.9;
               break;
            }
            document.getElementById("calories").innerHTML = MyCalorie.toFixed(2);
        }

    });
    //선택한 메뉴 담기
    $(document).on('click', '.menuadd', function () {
    	let $this = $(this);
    	let mealNo=$(this).siblings().eq(0).val();
    	let mealUnit=$(this).siblings().eq(1).val();
    	let mealProtein=$(this).siblings().eq(2).val();
    	let mealFat=$(this).siblings().eq(3).val();
    	let mealCarb=$(this).siblings().eq(4).val();
    	let mealSoium=$(this).siblings().eq(5).val();
    	let mealName=$(this).siblings().eq(6).text();
    	let mealAmount=$(this).siblings().eq(7).text();
    	let mealKcal=$(this).siblings().eq(8).text();
    	let checkedState=$(this).siblings().eq(9).val();

    	console.log("mealNo", mealNo);
    	console.log("mealName", mealName);
    	
    	if(checkedState==0) {
    		$this.siblings().eq(9).val(1);
    		var result ='<li class="menu_list_li" id="opt' + mealNo + '">';
    			/*result +='<p class="menu_list_lipd menu_list_lipdsmall">'+mealNo+'</p>';*/
    			result += '<p class="menu_list_lipd menu_list_lipdbig">'+mealName+'</p>';
    			result += '<p class="menu_list_lipd">'+mealAmount+'</p>';
    			result += '<p class="menu_list_lipd">'+mealKcal+'</p>';
    			result += '<p class="menu_list_lipd">'+mealCarb+'</p>';
    			result += '<p class="menu_list_lipd">'+mealProtein+'</p>';
    			result += '<p class="menu_list_lipd">'+mealFat+'</p>';
    			result += '<p class="menu_list_lipd">'+mealSoium+'</p>';
    			result += '</li>';
    			console.log('result', result);
    			
    		$('#menuaddBox').append(result);
    		
    		let totalCal = parseFloat($('#kacltotal').val()) + parseFloat(mealKcal);
    		console.log("totalCal"+totalCal);
        	$('#kacltotal').val(totalCal);
        	
        	let carbtotal=parseFloat($('#carbtotal').val()) + parseFloat(mealCarb);
        	console.log("carbtotal"+carbtotal);
        	$('#carbtotal').val(carbtotal);
        	
        	let proteintotal=parseFloat($('#proteintotal').val()) + parseFloat(mealProtein);
        	$('#proteintotal').val(proteintotal);
        	
        	let fattotal=parseFloat($('#fattotal').val()) + parseFloat(mealFat);
        	$('#fattotal').val(fattotal);
        	
        	let sodiumtotal=parseFloat($('#sodiumtotal').val()) + parseFloat(mealSoium);
        	$('#sodiumtotal').val(sodiumtotal);
        	
    	} else {
    		$this.siblings().eq(9).val(0);
    		$('#opt' + mealNo ).remove(result);
    		
    		let totalCal = parseFloat($('#kacltotal').val()) - parseFloat(mealKcal);
        	$('#kacltotal').val(totalCal);
        	let carbtotal=parseFloat($('#carbtotal').val()) - parseFloat(mealCarb);
        	$('#carbtotal').val(carbtotal);
        	
        	let proteintotal=parseFloat($('#proteintotal').val()) - parseFloat(mealProtein);
        	$('#proteintotal').val(proteintotal);
        	
        	let fattotal=parseFloat($('#fattotal').val()) - parseFloat(mealFat);
        	$('#fattotal').val(fattotal);
        	
        	let sodiumtotal=parseFloat($('#sodiumtotal').val()) - parseFloat(mealSoium);
        	$('#sodiumtotal').val(sodiumtotal);
    	}
    	
    	console.log('아아아아아', $('#sodiumtotal').val());
    });
    

});

