import {observer} from "mobx-react-lite";
import styles from "./ui/Sensor.module.css";
import React, {useRef} from "react";
import {useKeyStore} from "../contexts/KeyContext";


const Sensor = observer(function Sensor({children}: { children: React.ReactNode[] }) {
    const store = useKeyStore();
    const div = useRef<HTMLDivElement>(null);
    return (
        <div ref={div} className={styles.sensor}
             onPointerDown={evt => {
                 const rect = div.current!.getBoundingClientRect();
                 store.setPos(evt.clientX - rect.left, evt.clientY - rect.top);
             }}
             onPointerMove={evt => {
                 if (!store.isDrawing()) return;
                 const rect = div.current!.getBoundingClientRect();
                 store.setPos(evt.clientX - rect.left, evt.clientY - rect.top);
             }}
             onPointerUp={() => store.submit()}
        >
            {children}
        </div>
    )
});

export default Sensor;