import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import All from "./All";
import Random from "./Random";

export default function App() {

    console.log('test!');

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Random />} />
            <Route path="/all" element={<All />} />
        </Routes>
    </BrowserRouter>
}
