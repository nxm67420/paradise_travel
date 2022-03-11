import { useState, useEffect } from "react";

export const useFetch = (url) => { 
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    
    useEffect(() => { 
        const controller = new AbortController()
        
        const fetchData = async () => { 
            setLoading(true);

            try {
                const response = await fetch(url, { signal: controller.signal});
                if (!response.ok) { 
                    throw new Error(response.statusText)
                }
                const json = await response.json();
                setLoading(false);
                setData(json);
                setError(null)
            }
            catch (err) { 
                if (err.name === "AbortError") {
                    console.log("Fetch Was Aborted")
                }
                else { 
                    setLoading(false);
                    setError('Could Not Fetch The Data')
                    console.log(err.message);
                }
                
            }
        }//end of fetchData Function 

        fetchData();//Call function to fetch Data

        //abort fetch request 
        return () => { 
            controller.abort();
        }
        
    }, [url])//Array Dependency to watch for Changes

    return { data, isLoading, error} //Return Response Data 
}

