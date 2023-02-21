import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import "./styles/style.scss";
import Subscription from "./pages/Subscription/Subscription";
import FaqPage from "./pages/Faq/FaqPage";
import Profile from "./pages/Profile/Profile";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/userSlice";
import { collection, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "./firebase";

function App() {
    const dispatch = useDispatch();
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && user.emailVerified) {
                const getUser = async () => {
                    const userRef = doc(db, "users", auth.currentUser.uid);
                    const userData = await getDoc(userRef);
                    dispatch(
                        setUser({
                            name: user.displayName,
                            email: user.email,
                            id: user.uid,
                            subscriptions: userData.data().subscriptions,
                        })
                    );
                };

                getUser();
            }
        });
        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="subscription/:id" element={<Subscription />} />
                <Route path="faq" element={<FaqPage />} />
                <Route path="profile/:id" element={<Profile />} />
            </Route>
        </Routes>
    );
}

export default App;
