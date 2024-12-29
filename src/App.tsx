// import UserRegistration from "./pages/auth/UserRegistration";
import { Toaster } from "sonner";
import Router from "./router";

function App() {
  return (
    <>
      <Router />
      <Toaster position="bottom-right" />
    </>
    // <UserRegistration />
  );
}

export default App;
