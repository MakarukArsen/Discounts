import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import "./styles/style.scss";
import Subscription from "./pages/Subscription/Subscription";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="subscription/:id" element={<Subscription />} />
            </Route>
        </Routes>
    );
}

export default App;
