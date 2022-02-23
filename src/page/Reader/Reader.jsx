import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getPublication, deletePublication} from "services/API";

export function Reader({data}) {
    const [publicationIndex, setPublicationIndex] = useState(0);
    const [articles, setArticles] = useState([]);
    const [load, setLoad] = useState(false);
    // const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        async function getArticles() {
            try {
                setLoad(true);
                 const publication = await getPublication();
                setArticles(publication);
            } catch (error) {
                console.log(error);
            } finally {
                setLoad(false);
            } 
        }
        getArticles();  
    },[])
    

    const onChangeIndex = (value) => {
        setPublicationIndex((prev) => prev + value);
        // setSearchParams({ query: publicationIndex + 2});
        // console.log(publicationIndex );  
    };

    const deleteItem = async () => {
        try {
            const publication = articles[publicationIndex];
            await deletePublication(publication.id);
            setArticles((prevState)=>prevState.filter(article => article.id !== publication.id))
        } catch (error) {
            console.log(error);
        }
        
    };

    const publication = articles[publicationIndex];
    return (
        <>
            <Link to='/reader/add'>Add publication</Link>
            
            {publication &&
                <div>
                    <div>
                        <button type='button' disabled={publicationIndex < 1} onClick={() => onChangeIndex(- 1) }>previously</button>
                        <button type='button' disabled={publicationIndex > articles.length - 2} onClick={() => onChangeIndex(1)}>next</button>
                    </div>
                    <p>{publicationIndex + 1}/{ articles.length}</p>
                    <h2>{publication.title}</h2>
                    <p>{publication.article}</p>
                    <button type='button' onClick={deleteItem}>Delete</button>
                </div>
            }
            {load && <p>pending</p>}
        </>
    )
}