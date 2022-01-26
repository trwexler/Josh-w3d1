import React, {useState} from 'react';
import './App.css';

function App() {
  // This will be thestate variable and function to keep track of the current skill text the user enters in the input
  const [skill, setSkill] = useState("");
    // This will be the state variable and function to hold an array of skills and associated level [{}, {}]
  // ** an array of skill objects
  const [skillArr, setSkillArr] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault();
    // Define object to add to array. Each skill will be initialized with a level of 1
    const newSkill = {
      skill: skill,
      level: 1
    }
    setSkillArr([...skillArr, newSkill]);
    setSkill("");
  }

    // function to remove a skill from state.
  // Notice how we use the index of the skill because it is a unique identifier
  const handleDeleteSkill = (indexFromBelow)=>{
    const filteredArr = skillArr.filter((element, index)=>index !== indexFromBelow);
    setSkillArr(filteredArr);
  }

  const handleIncreaseSkillLevel = (indexFromBelow)=>{

        //1. We use the spread operator to make a copy of the individual skill form the array that needs changing
      //We do not want to directly manipulate state, so we make changes on this copy rather than state itself.

      let skillToUpdate = {...skillArr[indexFromBelow]};

          // modify object: increase skill level by 1

      skillToUpdate.level++

      setSkillArr(
        [...skillArr.slice(0, indexFromBelow), skillToUpdate]
        .concat(
          skillArr.slice(indexFromBelow + 1)
        ))

      //following the steps up the code above step by step!
      console.log("indexFromBelow", indexFromBelow);
      console.log("Our individual skill", { ...skillArr[indexFromBelow] })
      console.log("New level", skillToUpdate.level++)
      console.log("slice at 0 and " + indexFromBelow, skillArr.slice(0, indexFromBelow)); 
      console.log("slice return plus updated skill", [...skillArr.slice(0, indexFromBelow), skillToUpdate]);
      console.log("added with concat bc second param non-inclusive", skillArr.slice(indexFromBelow + 1));
      console.log("Complete with slice + concat", [...skillArr.slice(0, indexFromBelow), skillToUpdate]
        .concat(skillArr.slice(indexFromBelow + 1)
        ));
  }

  return (
    <div className="App">
      <h1>You've Got Mad Skillz</h1>
      <form onSubmit={(e)=>submitHandler(e)}>
        <h3>Add a skill!</h3>
        <input value={skill} type="text"
        onChange={(e)=>{
          console.log(e);
          console.log(e.target);
          console.log(e.target.value);
          setSkill(e.target.value);
        }}
        />
        <button>Add Skill</button>
      </form>

      <h2>All Skills:</h2>

      {
        skillArr.map((element, index)=>{  //0,1,2,3,4,5,6,7
          return(
            <div key={index}>
              <p>Skill: {element.skill}</p>
              <p>Level: {element.level}</p>

              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={()=>handleDeleteSkill(index)}
              >REMOVE
              </button>

              <button
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={() => handleIncreaseSkillLevel(index)}
              >LEVEL UP!
              </button>
              <hr/>


            </div>

            
          )
        })

      }


    </div>
  );
}

export default App;
