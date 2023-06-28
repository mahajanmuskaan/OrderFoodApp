import { createContext } from 'react';

const UserContext = createContext({
    user: {
        email: '',
    },
});


export default UserContext;
