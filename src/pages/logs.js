import { Authenticate } from "../services/api/authenticate";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NavigationBar from "../components/navigation";

export default function Dashboard(params) 
{
    const router = useRouter();

    useEffect(() => {
        if (!Authenticate()) {
            router.push("/")
        }
    })
    
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>Logs</h1>
        </div>
    );
}