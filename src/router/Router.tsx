import { memo , VFC} from "react";
import { Route, Switch } from "react-router";

import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
    return(
        <Switch>
            <LoginUserProvider>
            <Route exact path="/">
                <Login />
            </Route>
            <Route
                path="/home"
                render={({ match: {url} }) => (
                    <Switch>
                        {homeRoutes.map((route) => (
                            <Route 
                                key={route.path}
                                path={`${url}${route.path}`}
                                exact={route.exact}
                            >
                                <HeaderLayout>{route.children}</HeaderLayout>
                            </Route>
                        ))}
                    </Switch>
                )}
            >
            </Route>
            </LoginUserProvider>
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
});