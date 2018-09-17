// Jquery
<template>
    <div>
			<p>this is the first b</p>
			<p>this is the second b</p>
			<p>this is the third b</p>
			<div>
				<p id="one">this is js for myself</p>
				<button onClick="btnClick()">change</button>
			</div>
		</div>
</template>
<script>
export default {
	data () {
		return {
			
		}
	},
	methods: {
		btnClick() {
			document.getElementById('one').innerHTML='改变了'
		}
	}
};
$(document).ready(function() {
	$('p').eq(1).click(function() {
		$(this).hide()
	});
	$('p').eq(2).hover(function() {
		$(this).hide()
	})
});
</script>
<style>

</style>


