import ReactDOM from "react-dom/client";
import "./styles.css";
import {Canvas,} from "@react-three/fiber";
import {Scene} from "./Scene";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Canvas camera={{
        fov:45,
        near:.1,
        far:1000,
        position:[2,2,5]
    }}>
        <Scene/>
    </Canvas>
);
