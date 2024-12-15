unit.sort(function(a,b){
    return b.quality-a.quality;
});
function calculate(obj){
    for(let a=0;a<unit.length;a++){
        document.getElementById(a).value=obj.value/unit[obj.id].quality*unit[a].quality;
    }
}
for(let a=0;a<unit.length;a++){
    document.getElementById("board").innerHTML+="<div>"+unit[a].name+" : <input type='number' id="+a+" onchange='javascript:calculate(this)'></div>";
}