(function(){
    var showcode = false ;
    var checkOrder = true;
    var blue_tab = false;
    $(".total-value").text('£' + 00);
    window.shopping=function(){
        var quantity = $('.quantity');
        quantity.on("change",function(){
        $(".total-value").text('£' + quantity.val()*35);
        $(".item-number").text(quantity.val());
        $(".total-price").text('£' + quantity.val()*35);
       })
    }

    $(".plus-sign").on('click',function(){
        if(showcode == false){
            $(".discount-code").css("display","block");
            showcode = !showcode;
            return false;
        }else{
            $(".discount-code").css("display","none");
            showcode = !showcode;
            return false;
        }
    })
    $(".remove").on('click',function(){
        if(checkOrder == true){
            $(".shoppingcart").css("display","none")
            $(".message-no-order").css("display","block")
            $(".add-order").css("display","block")
            checkOrder = !checkOrder;
            return false;
        }else{
            $(".shoppingcart").css("display","block")
            $(".message-no-order").css("display","none")
            $(".add-order").css("display","none")
            checkOrder = !checkOrder;
            return false;
        }
    })
    $(".add-order").on('click',function(){
        $(".add-order").css("display","none")
        $(".message-no-order").css("display","none")
        $(".shoppingcart").css("display","block");

    })
    $(".dropdown").on('click',function(){
        var selectCountry = $(".choose-country").text();
    })
    $(".usa").on('click',function(){
        $(".choose-country").text("USA")
    })
    $(".turkey").on('click',function(){
        $(".choose-country").text("Turkey")
    })
    $(".canada").on('click',function(){
        $(".choose-country").text("United Kingdom")
    })

    $(".standard-delivery").on('click',function(){
        $(".delivery").html("Standard Delivery -£4,00");
    })
    $(".fast-delivery").on('click',function(){
        console.log('clicked')
        $(".delivery").html("Fast Delivery -£6,00");
    })
    $(".no-delivery").on('click',function(){
        $(".delivery").html("you take the order -£0.00");
    })
    $(".first-tab").on('click',function(){
        $(".first-tab").addClass("active");
        $(".second-tab").removeClass("active");
        $(".third-tab").removeClass("active"); 
        console.log('first tab clicked');
    })

    $(".second-tab").on('click',function(){
        $(".first-tab").removeClass("active");
        $(".second-tab").addClass("active");
        $(".third-tab").removeClass("active"); 
        console.log('second tab clicked');
    })
    $(".third-tab").on('click',function(){
        $(".first-tab").removeClass("active");
        $(".second-tab").removeClass("active");
        $(".third-tab").addClass("active");     
        console.log('third tab clicked');
    })

})()

var shoppingcart = shopping(); 