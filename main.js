var btn=document.getElementById('menu');
var opt=document.getElementById('options');



function toggle()
{
  if(opt.style.left=="-700px")
  {
    opt.style.left=0;
  }
  else{
    opt.style.left="-700px";
  }
}
