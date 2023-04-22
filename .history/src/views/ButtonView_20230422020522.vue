<template>
	<div>
		<div id="btn"> 默认按钮</div>

	</div>
</template>
<script>
var btn = document.getElementById("btn")
btn.onclick = function() {
  alert('click')
}
</script>
<style>
div {
  height: 20px;
  padding: 5px 10px;
  color: green;
  border: 1px solid #000;
  border-radius: 10px;
  display: inline-block;
}
</style>