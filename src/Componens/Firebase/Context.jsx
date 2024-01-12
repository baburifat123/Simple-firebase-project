import { createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { Firestore, addDoc, collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
const firebaseConfig = {
 apiKey: "AIzaSyA_BkaodB91isAW-1tgyaXcm6_VTdsrAZo",
  authDomain: "list-ef640.firebaseapp.com",
  projectId: "list-ef640",
  storageBucket: "list-ef640.appspot.com",
  messagingSenderId: "440992161665",
  appId: "1:440992161665:web:1178c52424c5e7fd309280"
};

const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
const firestore = getFirestore(app)
const store = getStorage(app)
export const AuthContext = createContext(null);
export const FirebaseData = (props) => {
const [user, setuser]= useState(null)

  const signUpEmailAndPassword = async (email, password) => {
      const userCredential = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };

  const SingIn =(email, password)=>{
    signInWithEmailAndPassword(FirebaseAuth, email, password)
  }
  
  useEffect(()=>{
     onAuthStateChanged(FirebaseAuth, user=>{
        if(user){
          setuser(user)
        }else{
            setuser(null)
        }
     })
  },[]);
// Storing data in Firestore

const collaction = async (name, number, price, cover) => {
  const imageref = ref(store, `upload/image${Date.now()}-${cover.name}`);
  
  try {
    const uploadImage = await uploadBytes(imageref, cover,);
    const imageUrl = uploadImage.ref.fullPath;

    return await addDoc(collection(firestore, "users"), {
      names: name,
      numbers: number,
      prices: price,
      imageURL: imageUrl,
      user: user.email,
      userId: user.uid,
      

    });
  } catch (error) {
    console.error("Error uploading image or adding document:", error);
    throw error; 
  }
};

const Detels = async (uid) => {
  const collectionRef = doc(firestore, "users", uid);
  const snap = await getDoc(collectionRef);
  return snap;
}


// Fetching data
const booklists = async () => {
  const querySnapshot = await getDocs(collection(firestore, "users"));
  return querySnapshot.docs.map(doc => doc.data());
};


const image = (path)=>{
  return getDownloadURL(ref(store, path))
}
const Islogin = user ? true : false ;
  return (
    <AuthContext.Provider value={{ signUpEmailAndPassword, SingIn, Islogin, collaction, booklists, image, Detels}}>
      {props.children}
    </AuthContext.Provider>
  );
};

