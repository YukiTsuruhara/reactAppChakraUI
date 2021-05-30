import axios from "axios"
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/api/User";


export const UserAuth = () => {

    const history = useHistory();

    const [loading,setLoading] = useState(false);

    const Login = useCallback((id: string)=> {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            if(res.data) {
                history.push("/home");
            }else {
                alert("ユーザーが見つかりません");
            }
        }).catch(() => {
            alert("ログインできません");
        }).finally(() => {
            setLoading(false);
        })
    },[history]);
    return { Login , loading };
};