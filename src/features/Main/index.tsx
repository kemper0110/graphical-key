import GraphicalKey from "../GraphicalKey/components";
import React, {useId, useState} from "react";

const Main = () => {
    const [switchState, setSwitchState] = useState(false);
    const switchId = useId();

    const onSubmit = (password: string) => {
        console.log(password);
    };
    return (
        <>
            <div className="input-group mb-3 w-25">
                <input type="checkbox" className="btn-check" id={switchId} autoComplete="off" checked={switchState}
                       onChange={evt => setSwitchState(evt.target.checked)}/>
                <label className="btn btn-primary" style={{width: "35%"}}
                       htmlFor={switchId}>{switchState ? 'Регистрация' : 'Вход'}</label>
                <input className="form-control" type="text" placeholder="Логин"/>
            </div>
            <GraphicalKey onSubmit={onSubmit}/>
        </>
    );
}

export default Main;