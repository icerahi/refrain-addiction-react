import { useEffect, useState } from "react";
import { initalizeFirebaseAuth } from "../config/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

initalizeFirebaseAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [error,setError]= useState("")


  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  return {
    user,
    signInWithGoogle,
    logOut,
    createUser,
    emailPasswordLogin,
    isLoading,
    error,setError,
  };
};

export default useFirebase;
