
function myFunction() {
 
    document.getElementById("myImg").src = "./assets/Yellow.png";
    document.getElementById("upload").style.backgroundColor="yellow"
    document.getElementById("container").style.backgroundColor="#ffe9a3"
  }
  function myFunction2() {
   document.getElementById("myImg").src = "./assets/Pink.png";
   document.getElementById("upload").style.backgroundColor="pink"
   document.getElementById("container").style.backgroundColor="#F3D1DD"
  }
  function myFunction3() {
    document.getElementById("myImg").src = "./assets/Blue.png";
    document.getElementById("upload").style.backgroundColor="blue"
    document.getElementById("container").style.backgroundColor=" #7D95FF"
  }

function onUpload(){
    
    var x = document.getElementById("myText").files
    document.getElementById("txt").innerHTML =x[0].name;
   
}
const image_input =document.getElementById("myText")
var uploaded_image="";

 image_input.addEventListener("change", function(){
  const reader= new FileReader();

  reader.addEventListener("load", ()=>{
    //  document.getElementById("loader").style.display=none;
    uploaded_image=reader.result;
    document.getElementById("logo").src=uploaded_image
  });reader.readAsDataURL(this.files[0]);
})

