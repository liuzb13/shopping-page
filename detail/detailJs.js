// 衣服尺码变换

$(document).ready(function () {
    $("#size_choose_s").click(function () {
       $("#size_choose_s").css("background-color","red");
       $("#size_choose_l").css("background-color","white");
       $("#size_choose_sl").css("background-color","white");
       $("#size_choose_ll").css("background-color","white");
       $("#size_choose").text("S");
    });
    $("#size_choose_l").click(function () {
        $("#size_choose_s").css("background-color","white");
        $("#size_choose_l").css("background-color","red");
        $("#size_choose_sl").css("background-color","white");
        $("#size_choose_ll").css("background-color","white");
        $("#size_choose").text("L");
    });
    $("#size_choose_sl").click(function () {
        $("#size_choose_s").css("background-color","white");
        $("#size_choose_l").css("background-color","white");
        $("#size_choose_sl").css("background-color","red");
        $("#size_choose_ll").css("background-color","white");
        $("#size_choose").text("SL");
    });
    $("#size_choose_ll").click(function () {
        $("#size_choose_s").css("background-color","white");
        $("#size_choose_l").css("background-color","white");
        $("#size_choose_sl").css("background-color","white");
        $("#size_choose_ll").css("background-color","red");
        $("#size_choose").text("LL");
    });
})

// 价格变换

$(document).ready(function () {
    $("#clothes_num").change(function () {
        var price=200;
        price=price*$("#clothes_num").val();
        $("#price_change").text(price);
    });
})

// 评分系统

// 放入购物车
$(document).ready(function () {
   $("#shopping_car").click(function () {
       alert("感谢您的购买。"+"您购买的产品是免烫高支棉条纹衬衣；尺寸是"+$("#size_choose").text()+
           "；颜色是：" +$("#color_name").text()+"；数量是："+$("#clothes_num").val()+"；总价是："+$("#price_change").text()+"元.");
   });
})

// 产品简介

