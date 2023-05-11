function game()
{
	let count = 0;
	
	if(document.getElementById('hlopushka').value.toLowerCase() == "хлопушка")
	{
		count++;
	}
	if(document.getElementById('rainbow').value.toLowerCase() == "радуга")
	{
		count++;
	}
	if(document.getElementById('carrot').value.toLowerCase() == "морковка" || document.getElementById('carrot').value.toLowerCase() == "морковь")
	{
		count++;
	}
	
	alert(`Верных ответов дано: ${count}`);
}