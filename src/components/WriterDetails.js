import { useEffect, useState } from "react";
import { getWriterById } from "../services/WriterService";
import { Link } from "react-router-dom";

// nest this component in BlogDetails component 
const WriterDetails = ({ userId }) => {
    console.log('userId', userId);

    const [writerData, setWriterData] = useState();

    useEffect(() => {
        console.log(userId);
        getWriterData(userId);
    }, []);

    const getWriterData = (userId) => {
        getWriterById(userId)
            .then((response) => {
                console.log(response.data);
                setWriterData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {writerData &&
                <>
                    <p>{writerData.name && writerData.name}</p>
                    <p>{writerData.username && writerData.username}</p>
                    <p>{writerData.address && writerData.address.city}</p>
                    <> {writerData.email &&
                        <Link to={`mailto:${writerData.email}`} >{writerData.email}</Link>
                    }
                    </>
                </>
            }
        </>
    );
};

export default WriterDetails;