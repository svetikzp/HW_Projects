const urlRandomImage = "https://api.thecatapi.com/v1/images/search";

const getImage = async () => {
  return await fetch(urlRandomImage)
    .then(res => res.json())
    .then(res => res[0].url)
}

fetch('https://catfact.ninja/facts?limit=7',
{method: 'GET',
headers: {'Accept': 'application/json','Content-Type': 'text/plain;charset=UTF-8'}})
.then((response) => {return response.json();})
.then(data => { 

    function getFact(data){
        for (data of data.data){
            createListItem(data.fact);
    }
    }

    function createListItem(text) {
        const list = document.getElementById('factList');
        const listItem = document.createElement('li');
        const textNode = document.createTextNode(text);
        const image = document.createElement('img');
          getImage().then(result => {image.src = result});
          console.log(image.src);
          listItem.appendChild(image);
        listItem.appendChild(textNode);
        list.appendChild(listItem);
    }
    getFact(data);
});