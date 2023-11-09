
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password, photo, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, photo);
    }
    
    const signIn = (email, password, photo) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password, photo)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleAuthProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    
    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle, 
        logOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


















// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile} from "firebase/auth";
// import app from "../../firebase/firebase.config";

// export const AuthContext = createContext(null);

// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//     const [authUser, setAuthUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password, photo, name) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Additional logic to update user profile (name and photo)
//                 return updateProfile(userCredential.user, { displayName: name, photoURL: photo })
//                     .then(() => {
//                         setAuthUser(userCredential.user);
//                     });
//             });
//     }

   
//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 setAuthUser(userCredential.user);
//             });
//     }

//     const signInWithGoogle = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider)
//             .then((userCredential) => {
//                 setAuthUser(userCredential.user);
//             });
//     }

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth)
//             .then(() => {
//                 setAuthUser(null);
//             });
//     }

//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log('user in the auth state changed', currentUser);
//             setAuthUser(currentUser);
//             setLoading(false);
//         });
//         return () => {
//             unSubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user: authUser,
//         loading,
//         createUser,
//         signIn,
//         signInWithGoogle, // Add Google login method
//         logOut,
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;








