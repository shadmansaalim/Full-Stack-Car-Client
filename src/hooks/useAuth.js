import { useContext } from "react"
import { Context } from '../context/ContextProvider'

const useAuth = () => {
    const [authContext] = useContext(Context);
    return authContext;
}

export default useAuth;