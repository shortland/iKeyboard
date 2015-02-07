$(document).ready(function()
{
	$('#keyboard_input').click(function(){
		$('#keyboard').fadeIn('fast');
	});
	
	$('.key').click(function()
	{
		if(this.id == "delete")
		{
			var fullstring = $('#keyboard_input').html();
			var new_string = fullstring.substring(0,fullstring.length-1);
			$('#keyboard_input').html(new_string);
			return false;
		}
		$('#keyboard_input').append(this.id);
	});
});