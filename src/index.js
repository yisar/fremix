import React, { createContext, useContext } from "react";

const RouteDataContext = createContext(null)

export const useLoaderData = () => {
    const context = useContext(RouteDataContext);

    return context;
}