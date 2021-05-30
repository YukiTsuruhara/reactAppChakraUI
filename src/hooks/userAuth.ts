import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/User";
import { UserMessage } from "./userMessage";


export const UserAuth = () => {

    const history = useHistory();

    const [loading,setLoading] = useState(false);

    const { ShowMessage } = UserMessage();

    const Login = useCallback((id: string)=> {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if(res.data) {
                ShowMessage({ title: "ログインしました" , status: "success"});
                history.push("/home");
            }else {
                ShowMessage({ title: "ログインに失敗しました" , status: "error"});
                alert("ユーザーが見つかりません");
            }
        }).catch(() => {
            ShowMessage({ title: "ログインに失敗しました" , status: "error"});
        }).finally(() => {
            setLoading(false);
        })
    },[history]);
    return { Login , loading };
};