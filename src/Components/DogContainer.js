import React from 'react'
import DogCard from './DogCard'


function DogContainer({dogs, filteredDogs}) {

const dogDisplay = filteredDogs.map((dog) => <DogCard {...dog} key={dog.id} />)
  return (
    <div>
        {dogDisplay}
    </div>
  )
}

export default DogContainer