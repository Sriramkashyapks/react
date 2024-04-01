import Greeting from "./Greeting";

function App () {
  return(
    <>
    <div className="page">
    <Greeting isLoggedIn = {true} userName = "Thatcher"/>
    <Greeting isLoggedIn = {true} userName = "Jennifer"/>
    <Greeting />
    </div>
    </>
  );
}

export default App;