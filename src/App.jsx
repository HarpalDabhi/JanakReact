import Hello from "./componets/Hello"
import Information from "./componets/Information"
import Properties from "./componets/Properties"
import "./componets/Li.css";
import DestructProp from "./componets/DestructProp";
import ArgsPass from "./componets/ArgsPass";
import ArrComponent from "./componets/ArrComponent";
import ArrFruits from "./componets/ArrFruits";
import Names from "./componets/NameList";

function App() {
  const person = {
    name : "Harpal",
    age: 21,
    education : "Computer Science",
    city : "Botad",
    contact : 992468052
  }
  return (
    <>
      <h1>Hello, ReactJS Library learning.</h1>
      <button><Hello/></button>
      <Information/>
      <fieldset>
        <figcaption>Pratp Sinh</figcaption>
        <Information/>
      </fieldset>
      <Properties name="Home"/>
      <Properties name="About"/>
      <Properties name="Contact"/>
      <Properties name="Help"/>
      <Properties name="Feedback"/>
      <Properties name="Category"/>
      <Properties name="Education"/>
      <DestructProp name="Aplle" color = "Red"/>
      <fieldset>
        <ArgsPass old={100} latest={80} discount={20} delivery={"free"}/>
      </fieldset>
      <p>
        <ArrComponent person={person}/>
      </p>
      <ul>
        <ArrFruits/>
        <Names/>
      </ul>
    </>
  )
}

export default App
