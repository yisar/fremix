import React, { createContext, useContext } from "react";

export const RouteDataContext = createContext(null)

export const useLoaderData = () => {
    const context = useContext(RouteDataContext);

    if (typeof window !== 'undefined'){
        return window.__fremix_data
    }

    return context;
}