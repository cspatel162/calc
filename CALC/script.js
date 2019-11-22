 function insert(num){
    document.form.view.value = document.form.view.value += num
}
function equal(){
   var expr = document.form.view.value
   if(expr){
   	document.form.view.value = eval(expr)
   }
}
function clr(){
    document.form.view.value = " ";
}
function bck(){
    var exp = document.form.view.value
    document.form.view.value = exp.substring(0, exp.length -1)
}