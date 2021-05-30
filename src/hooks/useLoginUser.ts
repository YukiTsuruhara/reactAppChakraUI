import { useContext } from "react";
import { LoginUserContextType, LoginUserContext } from "../providers/LoginUserProvider";

export const UseLoginuser = (): LoginUserContextType => useContext(LoginUserContext);