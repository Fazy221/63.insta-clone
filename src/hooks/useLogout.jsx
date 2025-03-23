import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
  // renamed loading to isLoggingOut for better readability
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();
  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
      console.log('Logged out');
    } catch(err) {
      showToast("Error", err.message, "error");
    }
  }
  return {handleLogout, isLoggingOut, error};
}

export default useLogout