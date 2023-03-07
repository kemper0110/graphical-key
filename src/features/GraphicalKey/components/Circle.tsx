import styles from "./ui/Circle.module.css";
import {observer} from "mobx-react-lite";
import {useKeyStore} from "../contexts/KeyContext";
import React from "react";

const Circle = observer(function Circle({idx}: { idx: number }) {
    const store = useKeyStore();
    // const [active, setActive] = useState(false);
    return (
        <button className={styles.circle + " m-1 "}
                onPointerEnter={() => store.push(idx)}
                onPointerDown={() => store.startDrawing(idx)}
        >
        </button>
    )
})

export default Circle;