import React from 'react'
import Form from './Form'


function DogCard({name, image, sex, age, breed }) {
  return (
    <div class="card">
        <h2>{name}</h2>
        <img src={image} alt={name} class="dog-picture"/>
        <p>{sex}</p>
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <button class="like-button">❤️</button>

    </div>
  )
}

export default DogCard