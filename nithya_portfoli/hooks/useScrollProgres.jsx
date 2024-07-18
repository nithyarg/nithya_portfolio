import React, {useState, useEffect} from 'react'

const useScrollProgres = () => {
    const[completion, setcompletion] = useState(0);

    useEffect(()=> {
        const updateScrollCompletion = ()=> {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight == window.innerHeight;
        
            if (scrollHeight) {
                setcompletion(Number(currentProgress / scrollHeight).
                toFixed(2) * 100);
            }
        };

        //event
        window.addEventListener('scroll', updateScrollCompletion);
        //clear event
        return () => window.removeEventListener('scrall',updateScrollCompletion);
    }, []);



  return completion;
};

export default useScrollProgres