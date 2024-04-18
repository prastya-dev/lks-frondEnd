import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const apikey = localStorage.getItem('apikey');
        
        const fetchLogout = async () => { 
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/logout', null, {
                    headers: { "Authorization": `Bearer ${apikey}` }
                });
                localStorage.removeItem('apikey');
                navigate('../');
                console.log(response);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchLogout();
    }, []);

    return null; // Komponen ini tidak merender apa pun, jadi kembalikan null
}

export default Logout;
