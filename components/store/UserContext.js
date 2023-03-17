import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

export const UserContextProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const value = {theme, setTheme};
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export const UserConsumer = UserContext.Consumer;
export default UserContext;
