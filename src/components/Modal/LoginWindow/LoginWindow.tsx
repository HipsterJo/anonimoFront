import React, {ReactNode} from "react";
import s from "./LoginWindow.module.css"

type LoginWindowProps={
    active:boolean
    setActive: any
    children: ReactNode
}
const LoginWindow:React.FC<LoginWindowProps> = ({active, setActive, children}) => {


    return (
        <div className={active ? s.modal : s.modalActive}
        onClick ={()=>setActive(!active)}>
            <div className={active ? s.formActive : s.form} onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default LoginWindow;