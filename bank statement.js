var balanceAmount=0;

function deposit(){
    depositAmount = document.getElementById("depos").value
    depositAmount=Number(depositAmount)
    if(depositAmount>0){
        balanceAmount+=depositAmount
        document.getElementById("depos").value=""
    }else{
        alert('enter a valid amound')
        document.getElementById("depos").value=""
    }
}
 function withdraw(){
    withdrawAmount=document.getElementById("withd").value
withdrawAmount=Number(withdrawAmount)
if(withdrawAmount>0 && balanceAmount>=withdrawAmount){
    balanceAmount-=withdrawAmount
 document.getElementById("withd").value=""
}else{
alert("invalid")
 document.getElementById("withd").value=""
}

}
function  balance(){
    document.getElementById("bal").innerHTML='$'+balanceAmount
}
