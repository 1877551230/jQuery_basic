function t1(){
    div_ele=document.getElementById("d1");
    div_ele.innerHTML="<ul><li>1</li><li>2</li></ul>";
}
function t2(){
    $("#d1").html("<ul><li>1</li><li>2</li></ul>");
}
function t3(){
    var div_ele=document.getElementById("d1");
    div_ele.style.fontSize="60px";
    $("d1").css("font-size","60px").css("color","red");
}
function t4(){
    var div_ele=document.getElementById("d1");
    var obj=$("#d1");
    var div_ele=obj.get(0);
    var div_ele1=obj.get()[0];
}
function t5(){
    var obj=$("d1");
    obj.css("font-size","30px");
}
function t6(){
    $(".c1").css({"color":"red"});
}
function t7(){
    $("#d1 div" ).css("color","red");
}
function t8(){
    $("#d1>div").css("color","pink");
}
function t9(){
    $("#d1+div").css("color","pink");
}
function t10(){
    $("#d1~div").css("color","red");
}
function t11(){
    $("table tr:first").css("color","red");
    $("table tr:eq(2)").css("color","red");
    $("table tr:odd").css("color","red");
    $("table tr:eq(1) td:eq(1)").css("background-color","blue").css("color","red");
    $("table tr:not(#tr4)").css("color","red");

}
function t12(){
    $("#d3 div:contains(yige)").css("font-size","30px");
    $("#d3 div:empty").html("xx");
    $("#d3 div:has(p)").css("color","red");
    $("#d3 div:parent").css("color","red");
}
function t13(){
    $("#d4 div:visible").hide(1000,function(){
        alert("xx");
    })
    $("#d4 div:hidden").show(3000,function(){
        $(this).html("xxx");
    })
}
function t14(){
    $("#d5 div[id]").css("color","red");
    $("#d5 div[id=d5_2]").css("color","red");
    $("#d5 div[id!=d5_2]").css("color","red");
}
function t15(){
    $("#d7 #form input:disabled").attr("disabled",false);
    $("#d7 #form2 input:checked")[0].value;
}


