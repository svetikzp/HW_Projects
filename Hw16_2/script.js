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
    .then((catbreeds) => {
   let breedList = catbreeds.data.concat();
        createBreedList(breedList);
});
function createBreedList(breedList) {
    for (breed of breedList) {
            const Select = document.getElementById('breed_preference');
            const SelectOpt = document.createElement('option');
            const SelectOptTxt = document.createTextNode(breed.breed);
            SelectOpt.setAttribute('value', breed.breed);
            SelectOpt.appendChild(SelectOptTxt);
            Select.appendChild(SelectOpt);
         
        }
    }