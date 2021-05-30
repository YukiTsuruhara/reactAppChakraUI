import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/User";
import { UserMessage } from "./userMessage"

export const UseAllUsers = () => {
    const { ShowMessage } = UserMessage();

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<User>>([]);

    const getUsers = useCallback(() => {
        setLoading(true);
        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUsers(res.data);
        }).catch(() => {
            ShowMessage({ title: "ユーザーの取得に失敗しました", status: "error" })
        }).finally(() => {
            setLoading(false);
        })
    },[])
    return{ getUsers, loading, users };  
}