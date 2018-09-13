const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainPage = document.getElementById('main')

// get all trainers and their pokemon info
fetch(TRAINERS_URL)
.then(res => res.json())
.then(trainers => {
  // iterate through trainers to create cards
  trainers.forEach(trainer => {
    // console.log(trainer.pokemons)
    const newDiv = document.createElement('div')
    newDiv.classList.add('card')
    newDiv.dataset.id = `${trainer.id}`
    newDiv.innerHTML = `<p>${trainer.name}</p>
      <button data-trainer-id="${trainer.id}">Add Pokemon</button>
      <ul id='pokemons-list-${trainer.id}' data-list-id='${trainer.id}'></ul>`
    // append cards to main page
    newDiv.append(pokemonsList)
    mainPage.append(newDiv)
    console.log(newDiv)
    trainer.pokemons.forEach(pokemon => {

      const newPokemon = document.createElement('li')

    })
    // trainer.pokemons.forEach(pokemon => {
    //   console.log(pokemon)
    //   const newPokemon = document.createElement('li')
    //   newPokemon.innerHTML = `${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>`
    //   const pokemonsList = document.getElementById(`pokemons-list-${trainer_id}`)
    // })
  })
})


// iterate through pokemons, create li elements, and add to trainers





// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>
