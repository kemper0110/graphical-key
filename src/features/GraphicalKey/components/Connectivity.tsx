import styles from "./ui/Connectivity.module.css";
import {observer} from "mobx-react-lite";
import {useKeyStore} from "../contexts/KeyContext";
import {useEffect, useRef} from "react";

export interface ConnectivityProps {
}
const Connectivity = observer(function Connectivity() {
    const store = useKeyStore();
    const getXY = (idx: number) => {return [(idx % 3 >> 0) * 110 + 50, (idx / 3 >> 0) * 110 + 50]};

    const makePointer = () => {
        if(!store.isDrawing())
            return false;
        const [x1, y1] = getXY(store.keys[store.keys.length - 1]);
        const [x, y] = store.getPos();
        return (
            <line x1={x1} y1={y1} x2={x} y2={y} className={styles.connectivity}/>
        )
    }

    return (
        <svg className={styles.connectivity}>
            {
                store.keys.map((value, index, array) => {
                    if(index === 0) return false;
                    const [x1, y1] = getXY(array[index - 1]);
                    const [x2, y2] = getXY(array[index]);
                    return (
                        <line
                            key={index}
                            x1={x1} x2={x2}
                            y1={y1} y2={y2}
                            className={styles.connectivity}
                        />
                    )
                })
            }
            {makePointer()}
            {/*<line x1={0} y1={0} x2={330} y2={330} style={{}}/>*/}
            {/*<line x1={330} y1={0} x2={0} y2={330} style={{strokeWidth: 3, stroke: "white"}}/>*/}
        </svg>
    )
})


export default Connectivity;