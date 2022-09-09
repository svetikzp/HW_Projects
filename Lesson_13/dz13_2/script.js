let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

const greenEnergy = object => {
  object['Fuel Type'] = 'avocado oil'   
 }


const remotelyDisable = objectParameter => {
  objectParameter.disabled = true
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);