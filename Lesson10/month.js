const month = prompt ('Write the number of the month to determine the time of year', '');


 if (month >= 3 && month < 6)
{
  result = 'Spring';  
}

else if (month >= 6 && month < 9)
  {
    result = 'Summer';
  }

else if (month >= 9 && month < 12)
  {
    result = 'Autumn';
  }
else if (month >= 12 || month >= 1 || month >= 2)
  {
    result = 'Winter';
  }
alert(result);