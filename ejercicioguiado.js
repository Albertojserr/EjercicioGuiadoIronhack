let seriesPending = ['Breaking Bug', 'Game of Drones','Boolean 99', 'Arrested Developer'];

//Add a new string element at the end of the seriesPending array. your choice of value!
seriesPending.push('Pocki Blinders');

//Write a loop that goes from 0 to the length of the seriesPending array. Inside the loop, use console.log() on each element of the array and its index.
for (let i = 0; i < seriesPending.length; i++) {

  //Inside the same loop, add a conditional that will check if one of the series inside the array is "Boolean 99". In case it is, console.log "Found it!"
  if (seriesPending[i]==='Boolean 99'){
    console.log('Found it!');
  }
  console.log(`Serie numero ${i}: ${seriesPending[i]}`);
}

//Declare and initialize a variable seriesWatching with an empty array.
let seriesWatching = [];

//Remove the first element of the seriesPending array and add it at the end of seriesWatching array. 
seriesWatching.push(seriesPending.shift())
console.log(seriesWatching)
console.log(seriesPending)

//Use a console.log() to see the length of both arrays.
console.log(`Longitud de la lista de series vistas: ${seriesWatching.length} \n Longitud de la lista de series pendientes: ${seriesPending.length}`)

//Now let’s move all the series to seriesWatching, but since we don’t want to manually write the same code for every element, let’s create a loop that will handle that
let long=seriesPending.length;
for(let i=0;i<long;i++){
  seriesWatching.push(seriesPending.shift());
  
}
//Add another console.log() to verify the length of the arrays after the loop. seriesPending should have 0 elements while seriesWatching should have 5.
console.log(`Longitud de la lista de series vistas: ${seriesWatching.length} \n Longitud de la lista de series pendientes: ${seriesPending.length}`)

//Let’s now remove all the elements from seriesWatching. We could run another loop and use the .pop() method, but let’s instead use the .splice() method to remove all the elements in the array.
seriesWatching.splice(0, seriesWatching.length);

//Finally, use one last console.log() with the length of both arrays. Both should be empty!
console.log(`Longitud de la lista de series vistas: ${seriesWatching.length} \n Longitud de la lista de series pendientes: ${seriesPending.length}`)
