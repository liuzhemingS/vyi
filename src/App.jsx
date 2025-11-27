import Card from './Card.jsx';
import Student from './Student.jsx';

function App() {

    return(
      <>
        <Card />
        <Student name="Alice" e={20} isStudent={true} />
        <Student name="Bob" e={22} isStudent={true}/>

      </>
    )
}

export default App
