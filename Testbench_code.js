var test_code=document.getElementById('testbench_logic');



function t8_click(){
test_code.innerText=`LIBRARY ieee;\nUSE ieee.std_logic_1164.ALL;\n ENTITY tb_decoder IS\n END tb_decoder;\n\tARCHITECTURE behavior OF tb_decoder IS\n\t– Component Declaration for the Unit Under\n\tTest (UUT)\n\tCOMPONENT decoder\n\tPORT(\n\ta : IN std_logic_vector(1 downto 0);\n\tb : OUT std_logic_vector(3 downto 0)\n\t);\n\tEND COMPONENT;\n\n\t– Inputs\n\tsignal a : std_logic_vector(1 downto 0) := \n\t(others => '0');\n– Outputs\n\tsignal b : std_logic_vector(3 downto 0);\n– appropriate port name\n\tBEGIN\n\n– Instantiate the Unit Under Test (UUT)\n\nuut: decoder PORT MAP (\n\ta => a,\n\tb => b\n );\n– Stimulus process\nstim_proc: process\nbegin\n– hold reset state for 100 ns.\n wait for 100 ns;\n a <= "00";\nwait for 100 ns;\n a <= "01";\n wait for 100 ns;\n a <= "10";\nwait for 100 ns;\na <= "11";\n\nwait;\nend process;\n\nEND;`;
}


function t7_click()
{
  test_code.innerText=`LIBRARY ieee;\nUSE ieee.std_logic_1164.ALL;\n\nENTITY tb_encoder IS\nEND tb_encoder;\nARCHITECTURE behavior OF tb_encoder IS\n– Component Declaration for the Unit Under Test (UUT)\nCOMPONENT encoder\nPORT(\na : IN std_logic_vector(3 downto 0);\nb : OUT std_logic_vector(1 downto 0)\n);\nEND COMPONENT;\n--Inputs\nsignal a:std_logic_vector(3 downto 0):=\n(others =>'0');\n--Outputs\nsignal b : std_logic_vector(1 downto 0);\nBEGIN\n– Instantiate the Unit Under Test (UUT)\nuut: encoder PORT MAP (\n);\n– Stimulus process\nstim_proc: process\nbegin\n – hold reset state for 100 ns.\nwait for 100 ns;\na <= "0000";\nwait for 100 ns;\na <= "0001";\nwait for 100 ns;\na <= "0010";\nwait for 100 ns;\na <= "0100";\nwait for 100 ns;\na <= "1000";\nwait;\nend process;\nEND;`;
  
}

function t6_click()
{
  test_code.innerText=` LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY tb_demux IS
END tb_demux;

ARCHITECTURE behavior OF tb_demux IS

 – Component Declaration for the Unit Under Test (UUT)

COMPONENT demux_1to4
PORT(
F : IN std_logic;
S0 : IN std_logic;
S1 : IN std_logic;
A : OUT std_logic;
B : OUT std_logic;
C : OUT std_logic;
D : OUT std_logic
);
END COMPONENT;

--Inputs
signal F : std_logic := '0';
signal S0 : std_logic := '0';
signal S1 : std_logic := '0';

--Outputs
signal A : std_logic;
signal B : std_logic;
signal C : std_logic;
signal D : std_logic;
 – No clocks detected in port list. Replace <clock> below with
 – appropriate port name

BEGIN

 – Instantiate the Unit Under Test (UUT)
uut: demux_1to4 PORT MAP (
F => F,
S0 => S0,
S1 => S1,
A => A,
B => B,
C => C,
D => D
);

 – Stimulus process
stim_proc: process
begin
 – hold reset state for 100 ns.
wait for 100 ns;

F <= '1';

S0 <= '0'; S1 <= '0';

wait for 100 ns;

S0 <= '1'; S1 <= '0';

wait for 100 ns;

S0 <= '0'; S1 <= '1';

wait for 100 ns;

S0 <= '1'; S1 <= '1';

wait for 100 ns;
 – insert stimulus here

wait;
end process;

END;
   `;
}
function t5_click()
{
  test_code.innerText= `   LIBRARY ieee;
USE ieee.std_logic_1164.ALL;

ENTITY tb_mux IS
END tb_mux;

ARCHITECTURE behavior OF tb_mux IS 

    – Component Declaration for the Unit Under Test (UUT)

    COMPONENT mux_4to1
    PORT(
         A : IN  std_logic;
         B : IN  std_logic;
         C : IN  std_logic;
         D : IN  std_logic;
         S0 : IN  std_logic;
         S1 : IN  std_logic;
         Z : OUT  std_logic
        );
    END COMPONENT;

   – Inputs
   signal A : std_logic := '0';
   signal B : std_logic := '0';
   signal C : std_logic := '0';
   signal D : std_logic := '0';
   signal S0 : std_logic := '0';
   signal S1 : std_logic := '0';

 	--Outputs
   signal Z : std_logic;

BEGIN

	 – Instantiate the Unit Under Test (UUT)
   uut: mux_4to1 PORT MAP (
          A => A,
          B => B,
          C => C,
          D => D,
          S0 => S0,
          S1 => S1,
          Z => Z
        );

   – Stimulus process
   stim_proc: process
   begin
      – hold reset state for 100 ns.
      wait for 100 ns;	

	A <= '1';
	B <= '0';
	C <= '1';
	D <= '0';		

	S0 <= '0'; S1 <= '0';

      wait for 100 ns;	

	S0 <= '1'; S1 <= '0';

      wait for 100 ns;	

	S0 <= '0'; S1 <= '1';

		wait for 100 ns;	

	S0 <= '0'; S1 <= '1';   

		wait for 100 ns;	

	end process;

END;   `;
}
function t4_click()
{
  test_code.innerText= `  library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_ARITH.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity full_sub_tb is
end entity;

architecture tb of full_sub_tb is
component FULLSUBTRACTOR_BEHAVIORAL_SOURCE is
Port ( A : in STD_LOGIC_VECTOR (2 downto 0);
Y : out STD_LOGIC_VECTOR (1 downto 0));
end component;

signal A: STD_LOGIC_VECTOR(2 downto 0);
signal Y: STD_LOGIC_VECTOR(1 downto 0);

begin

uut: FULLSUBTRACTOR_BEHAVIORAL_SOURCE port map(
A => A, Y => Y);

stim:process
begin

A <= "000";
wait for 20 ns;

A <= "001";
wait for 20 ns;

A <= "010";
wait for 20 ns;

A <= "011";
wait for 20 ns;

A <= "100";
wait for 20 ns;

A <= "101";
wait for 20 ns;

A <= "110";
wait for 20 ns;

A <= "111";
wait for 20 ns;
wait;

end process;

end tb;    `;
}

function t2_click()
{
  test_code.innerText=`  library IEEE;
use IEEE.std_logic_1164.all;

entity half_adder_tb is
end entity;

architecture tb of half_adder_tb is
component H_adder is
port( a,b : IN std_logic;
sum,carry : OUT std_logic);
end component;

signal a,b,sum,carry: std_logic;

begin

uut: H_adder port map(
a => a, b => b,
sum => sum,
carry => carry);

stim: process
begin

a <= '0';
b <= '0';
wait for 20 ns;

a <= '0';
b <= '1';
wait for 20 ns;

a <= '1';
b <= '0';
wait for 20 ns;

a <= '1';
b <= '1';
wait for 20 ns;

wait;

end process;

end tb;   `;
}
