//原生js的写法
function f1(){
    var div_ele=document.getElementById("d1");
    div_ele.innerHTML="jquery,写的少,做得多";
    alert(div_ele.innerHTML);
}

//jQuery的写法
function f2(){
    var obj=$("#d1");//等价于document.getElementById("d1")
    obj.html("jquery,写的少,做得多");//等价于div_ele.innerHTML="jquery,写的少,做得多";
    alert(obj.html());
}

//jQuery的写法  方法链
function f3(){

    /*jquery的写法
    $("#d1").css("font-size","60px")
    对应的原生js写法
    var div_ele=document.getElementById("d1");
    div_ele.style.fontSize="60px";*/

    //方法链写法
    $("#d1").css("font-size","60px").css("font-style","italic");

   //$("#d1").css({"font-size":"60px","font-style":"italic","background-color":"pink","color":"red"});
    
   /* index代表类名为c1的第几个元素,value指具体的赋值
   $(".c1").css({"font-size": function(index,value){
       console.log(index);
       console.log(value);
       value="60px";
       return value;} , 
       "font-style":"italic","background-color":"pink","color":"red"});*/
}
//dom对象转换成jquery对象

function f4(){
    //原生的js对象,dom对象
    var div_ele=document.getElementById("d1");
    alert(div_ele);
    //原生js的对象转换成jquery对象
    var obj=$(div_ele);
    alert(obj);
}
//jquery对象转换成dom对象
function f5(){
    //jquery对象
    var obj=$("#d1");
    //转换成dom对象
    var div_ele=obj.get(0);
    var div_ele1=obj.get()[0];
    alert(div_ele);
}
//基本选择器
function f6(){
    var obj=$("#d1");
    obj.css("font-size","30px");
}
//class类选择器
function f7(){
    $(".c1").css({"color":"red"});
    $(".c2").css("background-color","pink");
}
//html标签类选择器
function f8(){
    $("div").css({"color":"red"});
    $("p").css("background-color","pink");
}
//合并选择器
function f9(){
    $("#d1,span,.c1").css("background-color","pink");
}
//*选择器(不推荐使用)
function f10(){
    $("*").css("background-color","pink");
}


//层次选择器
//select1空格select2
function f11(){
    //$("#d1 .c2").css("background-color","pink");
    $("#d1 div").css("background-color","pink");
}
//select1>select2
function f12(){
    //$("#d1 .c2").css("background-color","pink");
    $("#d1>div").css("color","pink");
}
//select1+select2
function f13(){
    //$("#d1 .c2").css("background-color","pink");
    $("#d1+div").css("color","pink");
}
//select1~select2
function f14(){
    //$("#d1 .c2").css("background-color","pink");
    $("#d1~div").css("color","pink");
}
//过滤选择器中的基本过滤选择器
function f15(){
    $("table tr").css("background-color","pink");
    $("table tr:first").css("background-color","red");
    $("table tr:eq(2)").css("background-color","orange");
    //$("table tr:even").css("background-color","blue");
}
//jquery的onload事件 等价于window.onload=function(){}
$(function(){
    f15();
});
function f16(){
    $("table tr:even").css("background-color","#aaffaa");
    $("table tr:odd").css("background-color","#ffffaa");
}
function f17(){
    $("table tr:eq(1) td:eq(1)").css("background-color","blue").css("font-size","30px");
}
function f18(){
    $("table tr:not(#tr4)").css("background-color","black").css("font-size","40px").css("color","white");
}
//过滤选择器中的基本内容选择器
function f19(){
    $("#d3 div:contains(一个)").css("font-size","30px");
}
function f20(){
    $("#d3 div:empty").html("原来是空,现在添上内容");
}
function f21(){
    $("#d3 div:has(p)").css("font-size","30px");
}
function f22(){
    $("#d3 div:parent").css("font-size","30px");
}
//过滤选择器中的可见性过滤选择器
function f23(){
    //$("#d4 div:visible").css("display","none");
    $("#d4 div:visible").hide(1000,function(){
        alert("隐藏了");
    });
}
function f24(){
   // $("#d4 div:hidden").css("display","block");
    $("#d4 div:hidden").show(3000,function(){
        $(this).html("文本显示了");
        alert("显示了");
    });
}

//过滤选择器中的属性过滤选择器

function f25(){
    $("#d5 div[id]").css("font-size","30px");
}
function f26(){
    $("#d5 div[id=d5_2]").css("font-size","30px");
}
function f27(){
    $("#d5 div[id!=d5_2]").css("font-size","30px");
}
//过滤选择器中的子元素过滤选择器
function f28(){
    $("#d6 ul:eq(1) li:eq(1)").css("font-size","30px");
}
function f29(){
    $("#d6 ul:eq(0) li:nth-child(odd)").css("font-size","30px");
}
//过滤选择器中的表单对象过滤选择器
function f30(){
    $("#d7 #form1 input:disabled").css("border","1px solid red");
}
function f31(){
    //$("#d7 #form1 input:enabled").css("border","1px solid red");
    $("#d7 #form1 input:disabled").attr("disabled",false);
}
function f32(){
    var len=$("#d7 #form2 input:checked").length;
    alert(len);
    alert($("#d7 #form2 input:checked")[0].value);
    alert($("#d7 #form2 input:checked")[1].value);

}
function f33(){
    alert($("#d7 #form3 select option:selected").val());
}
//表单选择器  val=value
function f34(){
    var obj=$("#d8 #form1 input:button");
    obj.val("保存");
}

