for(let i = 0; i < 100;)
  console.log((++i % 3 ? '' : 'FIZZ') + (i % 5 ? '' : 'BUZZ') || i);