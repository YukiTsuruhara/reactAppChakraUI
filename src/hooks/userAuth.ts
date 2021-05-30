import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/User";
import { UserMessage } from "./userMessage";
import { UseLoginuser } from "../hooks/useLoginUser";


export const UserAuth = () => {

    const history = useHistory();

    const [loading,setLoading] = useState(false);

    const { ShowMessage } = UserMessage();

    const { setLoginUser } = UseLoginuser();

    const Login = useCallback((id: string)=> {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if(res.data) {
                const isAdmin = res.data.id === 10 ? true : false;
                setLoginUser({ ...res.data,isAdmin });
                ShowMessage({ title: "ログインしました" , status: "success"});
                history.push("/home");
            }else {
                ShowMessage({ title: "ログインに失敗しました" , status: "error"});
                setLoading(false);
            }
        }).catch(() => {
            ShowMessage({ title: "ログインに失敗しました" , status: "error"});
            setLoading(false);
        })
    },[history, ShowMessage,setLoginUser]);
    return { Login , loading };
};