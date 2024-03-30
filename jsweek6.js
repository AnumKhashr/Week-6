function handleBindings(){
    console.log("Handle Bindings");
}
function doBindings(){ 
    var btn =  document.getElementById("btnAdd");
    btn.onclick = handleBindings; //passing function ref
}
window.onload = doBindings;
function handle(){
    console.log("handle");
}