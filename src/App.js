import MyFirstApp from "./study.js";
import { UserInfo } from "./study.js";

function App() {
  return (
    <> 
      <MyFirstApp/>
      {/* multiple component */}
      <UserInfo name={"etiene"} email={"etine@gmail.com"}/>
    </>

  );
}

export default App;
