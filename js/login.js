$(function () {
    $("#login").click(function () {
        var username = $("#inputName").val();
        var password = $("#inputPassword").val();
        
        if (username != "wuyue" || password != "20171014") {
            alert("傻子，输入错误！");
            return false;
        }
    });
})