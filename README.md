# Volume calculator
<link href="/css/calc.css" rel="stylesheet">
<script src='/js/calc.js'></script>
Calculator for rectangular volume of material
<form id="calculator" name="calculator">
	<input type="radio" id="metric" name="units" value="metric"/>
  <label for="metric">Metric</label>
  <input type="radio" id="imperial" name="units" value="imperial"/>
  <label for="imperial">Imperial</label>
	<hr>
	<div id="calc">
		<span id="calc-diameter" style="display: none;"><span>Diameter:</span> <input type="text" name="diameter">ft<br></span>
		<span id="calc-width"><span>Width:</span> <input type="text" name="width"><span class="imperial">ft</span><span class="metric">m</span><br/></span>
		<span id="calc-length"><span>Length:</span> <input type="text" name="length"><span class="imperial">ft</span><span class="metric">m</span><br></span>
		<span id="calc-depth"><span>Depth:</span> <input type="text" name="depth"><span class="imperial">ft</span><span class="metric">m</span><br></span>
	</div>
	<hr>
	<input id="calculate-rectangle" type="button" value="Calculate" onclick="javascript:rectangle();">
	<span class="result"><span>Result:</span> <input type="text" name="total" disabled="disabled"> <span class="imperial">ft<sup>3</sup></span><span class="metric">m<sup>3</sup></span></span>
</form>
