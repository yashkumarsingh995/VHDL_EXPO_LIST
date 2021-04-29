var sim_code=document.getElementById('simulation');


//Decoder done
function s8()
{
sim_code.innerHTML=` <script type="WaveDrom">
{ signal : [
  { name: "b",  wave: "5335..", data: "00 01 10 11"  },
  { name: "q",  wave: "5335..",   data: "000 001 010 011" },
 
],
head:{
  tick:"0",
},
  
}
</script>  `;
}



function s7()
{
sim_code.innerHTML=` <script type="WaveDrom">
{ signal : [
  { name: "b",  wave: "5.3335.", data:"0000 0001 0010 0100 1000" },
  { name: "q",  wave: "5.3335.",   data: "zz 11 10 01 00" },
  
],
  head:{
    tick:"0",
  },
}
</script>  `;
}


function s6()
{
sim_code.innerHTML=` <script type="WaveDrom">
{ signal : [
  { name: "1",  wave: "0..1............" },
  { name: "1",  wave: "0.....1..0..1...", },
  { name: "1",  wave: "0........1......" },
  { name: "1",  wave: "0..1............"},
  { name: "1",  wave: "0.....1........."},
  { name: "1",  wave: "0.........1....."},
],
  head:{
    tick:"0",
  },
}
</script>  `;
}


function s5()
{
sim_code.innerHTML=` <script type="WaveDrom">
{ signal : [
  { name: "1",  wave: "0..1.............." },
  { name: "0",  wave: "0.................",  },
  { name: "1", wave: "0..1..............." },
  { name: "0", wave: "0.................." },
  { name: "0" , wave: "0....1..0........."},
  { name: "1" ,wave: "0........1....0...."},
  { name: "1" ,wave: "0..1...0..1........"},
],
  head:{
    tick:"0",
  },
}
</script>  `;
}


function s4()
{
sim_code.innerHTML=` <script type="WaveDrom">
{ signal : [
  { name: "a",  wave: "0.....1......." },
  { name: "b",  wave: "0..1..0..1...." },
  { name: "bin", wave: "0.1.0.1.0.1..." },
  { name: "diff", wave:"0..1...0.1.0.1."},
  { name: "bout", wave:"0..1.....0...1."}
]}
</script>  `;
}








//half adder done
function s2()
{
sim_code.innerHTML=` <script type="WaveDrom">
{ signal : [
  { name: "a",  wave: "0.....1........." },
  { name: "b",  wave: "0..1....0...1...." },
 
  { name: "sum", wave:"0..1........0..."},
  { name: "carry", wave:"0...........1..."},
],
  head:{
    tick:"0",
  },
}
</script>  `;
}



