var code_dsg=document.getElementById('code_design');




function a8_click()
{
code_dsg.innerText='library IEEE;\nuse IEEE.STD_LOGIC_1164.all;\nentity decoder is\nport(\na: in STD_LOGIC_VECTOR(1 downto 0);\nb: out STD_LOGIC_VECTOR(3 downto 0)\n);\nend decoder;\narchitecture bhv of decoder is\nbegin\nprocess(a)\nbegin\ncase a is\nwhen "00" => b <= "0001";\nwhen "01" => b <= "0010";\nwhen "10" => b <= "0100";\nwhen "11" => b <= "1000";\nend\ncase;\nend process;\n\nend bhv;';
 t8_click();
 s8();
}

function a7_click()
{
 code_dsg.innerText=' library IEEE;\nuse IEEE.STD_LOGIC_1164.all;\nentity encoder is\n port(\na : in STD_LOGIC_VECTOR(3 downto 0);\n b : out STD_LOGIC_VECTOR(1 downto 0)\n );\nend encoder;\narchitecture bhv of encoder is\nbegin\nprocess(a)\nbegin\n case a is\nwhen "1000" => b <= "00";\n when "0100" => b <= "01";\n when "0010" => b <= "10";\n when "0001" => b <= "11";\n when others => b <= "ZZ";\nend case;\nend process;\nend bhv; ';
 t7_click();
 s7();
}

function a6_click()
{
  code_dsg.innerText=` library IEEE;
use IEEE.STD_LOGIC_1164.all;

entity demux_1to4 is
 port(

 F : in STD_LOGIC;
 S0,S1: in STD_LOGIC;
 A,B,C,D: out STD_LOGIC
 );
end demux_1to4;

architecture bhv of demux_1to4 is
begin
process (F,S0,S1) is
begin
 if (S0 ='0' and S1 = '0') then
 A <= F;
 elsif (S0 ='1' and S1 = '0') then
 B <= F;
 elsif (S0 ='0' and S1 = '1') then
 C <= F;
 else
 D <= F;
 end if;

end process;
end bhv;   `;
t6_click();
s6();
}


function a5_click()
{
  code_dsg.innerText=` library IEEE;
use IEEE.STD_LOGIC_1164.all;

entity mux_4to1 is
 port(

     A,B,C,D : in STD_LOGIC;
     S0,S1: in STD_LOGIC;
     Z: out STD_LOGIC
  );
end mux_4to1;

architecture bhv of mux_4to1 is
begin
process (A,B,C,D,S0,S1) is
begin
  if (S0 ='0' and S1 = '0') then
      Z <= A;
  elsif (S0 ='1' and S1 = '0') then
      Z <= B;
  elsif (S0 ='0' and S1 = '1') then
      Z <= C;
  else
      Z <= D;
  end if;

end process;
end bhv;   `
t5_click();
s5();
}


function a4_click()
{
  code_dsg.innerText= ` library IEEE;

use IEEE.STD_LOGIC_1164.ALL;

use IEEE.STD_LOGIC_ARITH.ALL;

use IEEE.STD_LOGIC_UNSIGNED.ALL;


entity FULLSUBTRACTOR_BEHAVIORAL_SOURCE is

Port ( A : in  STD_LOGIC_VECTOR (2 downto 0);

Y : out  STD_LOGIC_VECTOR (1 downto 0));

end FULLSUBTRACTOR_BEHAVIORAL_SOURCE;


architecture Behavioral of FULLSUBTRACTOR_BEHAVIORAL_SOURCE is


begin


process (A)


begin


if (A = "001" or A = "010" or A = "111") then

Y <= "11";

elsif (A = "011") then

Y <= "01";

elsif (A = "100") then

Y <= "10";

else

Y <= "00";

end if;

end process;

end Behavioral;  `;
t4_click();
s4();
}





function a2_click()
{
 code_dsg.innerText= `  library IEEE;
use IEEE.std_logic_1164.all;

entity H_adder is
port(
a,b : IN std_logic;
sum,carry : OUT std_logic);
end H_adder;

architecture dataflow of H_adder is
begin

sum <= a xor b;
carry <= a and b;

end dataflow;    `;
t2_click();
s2();
  
}







