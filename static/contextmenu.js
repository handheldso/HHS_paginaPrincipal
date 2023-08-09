window.onload= ()=>{
    var bodys = document.getElementsByTagName("body");
    for(var i =0;i<bodys.length;i++){
        bodys[i].setAttribute('oncontextmenu',"return false;");
    }
}
$(document).ready(function () {
    //Disable cut copy paste
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
   
    //Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });
});