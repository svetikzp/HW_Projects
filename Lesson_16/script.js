fetch('https://catfact.ninja/breeds?limit=10', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'text/plain;charset=UTF-8'
    },
})
   .then((response) => {
        return response.json();
    })

.then((breedcats) => {
  for (breed of breedcats.data) {
       const Pref = document.getElementById('breed_preference');
          const PrefOpt = document.createElement('option');
          const PrefOptText = document.createTextNode(breed.breed);
PrefOpt.setAttribute('value', breed.breed);
         PrefOpt.appendChild(PrefOptText);
          Pref.appendChild(PrefOpt);
             console.log(breed.breed);
        }

    });