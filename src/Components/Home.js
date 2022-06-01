import React, { useEffect, useState } from "react";
import DogContainer from "./DogContainer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Favorites from "./Favorites";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState(["all"])

  useEffect(() => {
    fetch("http://localhost:3000/dogs")
      .then((resp) => resp.json())
      .then(setDogs);
  }, []);

  const filter = (data) => {
  
    if (filteredDogs === "all") return true
    
    //  ? setDogs([...dogs]) : 
    const filterData = dogs.filter(dog => dog.age === data)
    setFilteredDogs(filterData)
  }

// do I need to write a function for every single filter? 
  // function ageFilter(value) {
  //   const filteredDogs = dogs.filter((dog) => {
  //     return dog.age === value;
  //   });
  //   setDogs(filteredDogs);
  // }

  //  function sexFilter(value) {
  //    const filteredSex = dogs.filter((dog) => {
  //      return dog.sex === value;
  //    });
  //    setDogs(filteredSex);
  //  }

  return (
    <div>
      <Sidebar filter = {filter} />
      <DogContainer dogs={dogs} filteredDogs = {filteredDogs} />
    </div>
  );
}

export default Home;
