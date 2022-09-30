import { wrapHandler } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { login, registration } from "../../../redux/slices/authSlice";
import {useAppDispatch, RootState} from "../../../redux/store"

type RegisterFormProps={
    func: (arg0: boolean) => void
}

const RegisterForm:React.FC<RegisterFormProps>= ({func}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useAppDispatch();
    

    return (        
                <div className="relative p-4 w-full ">
                    
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="py-6 px-6 lg:px-8">
                        <h2 className="text-black">Зарегистрируйтесь</h2>
                            <div className="space-y-6" >
                                <div>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                                </div>
                                <div>
                                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div>
                                
                                <button onClick={() => dispatch(registration({email,password}))} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                You have account? <button  onClick={()=>func(false)} className="text-blue-700 hover:underline dark:text-blue-500">Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default RegisterForm;