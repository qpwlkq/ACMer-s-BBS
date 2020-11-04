var oDiv=document.getElementById("box");
oDiv.οnclick=function(){
    var bg=oDiv.style.backgroundColor;
    if(bg=='red'){
        oDiv.style.backgroundColor='blue';
    }else if(bg=='blue'){
        oDiv.style.backgroundColor='yellow';
    }else{
        oDiv.style.backgroundColor='red';
    }
}
