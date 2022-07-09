import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { useMemo, useState } from "react";
import { firebaseApp } from "../firebase";

const provider = new GoogleAuthProvider();

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const firebaseAuth = useMemo(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return auth;
  }, []);

  const login = async () => {
    const result = await signInWithPopup(firebaseAuth, provider);
    return result.user;
  };
  const logout = async () => {
    await signOut(firebaseAuth);
  };
  return {
    currentUser: user,
    login,
    logout,
  };
};
