import Table from "./Table";
import React from "react";
import Connectivity from "./Connectivity";
import {KeyContextProvider} from "../contexts/KeyContext";
import Sensor from "./Sensor";

interface GraphicalKeyProps {
    onSubmit: (password: string) => void;
}

const GraphicalKey = ({onSubmit}: GraphicalKeyProps) => {
    return (
        <KeyContextProvider onSubmit={onSubmit}>
                <div style={{position: "relative", width: 330, height: 330}}>
                    <Sensor>
                        <Table/>
                        <Connectivity/>
                    </Sensor>
                </div>
        </KeyContextProvider>
    )
};

export default GraphicalKey;