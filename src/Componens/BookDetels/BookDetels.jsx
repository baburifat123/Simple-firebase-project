import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Firebase/Context";

const BookDetels = () => {
    const param = useParams();
    const firebase = useContext(AuthContext);
    const { Detels } = firebase;

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDataSnap = await Detels(param.userId);
                
                // Check if the document exists
                if (userDataSnap.exists()) {
                    setUserData(userDataSnap.data());
                } else {
                    console.log("Document does not exist for userId:", param.userId);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [Detels, param.userId]);

    return (
        <div>
            <h1>hello</h1>
            {userData && (
                <div>
                    <p>User Name: {userData.userName}</p>
                    {/* Add other user data fields as needed */}
                </div>
            )}
        </div>
    );
};

export default BookDetels;
