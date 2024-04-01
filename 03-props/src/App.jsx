import Student from './Student.jsx';

function App() {
  return(
    <>
      <Student name = "Thatcher" age = {21} isStudent = {true}/>
      <Student name = "Jennifer" age = {20} isStudent = {true}/>
      <Student name = "Roy" age = {40} isStudent = {false}/>
      <Student/>
    </>
  );
}


export default App;