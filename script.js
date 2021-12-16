$(document).ready(function(){
    $("#look").click(function(e){
        e.preventDefault();
        $.get("tx.txt",function(data, textStatus,jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
        });
    });
});
