
import { useState, useEffect } from 'react';

const mediaQueries = [
    {media: '(min-width: 1200px)',size: 'XL'},
    {media: '(min-width: 992px)',size: 'L'},
]


/*
export const useMediaWidth = () =>{
    const [doesMatch, onSetDoesMatch] = useState(false);
    

    useEffect(() => {

        const mediaQueryLists = mediaQueries.map(query =>{
            return window.matchMedia(query.media)
        });

        const onUpdateMatch = (matcher) => {
            console.log('mediaQueryLists',matcher);
        }
        

        mediaQueryLists.forEach(matcher=>{
           matcher.addEventListener('change',onUpdateMatch)
        })
        
        return () => {
            mediaQueryLists.forEach(matcher=>{
                matcher.removeEventListener('change',onUpdateMatch)
            })
        }

    },[onSetDoesMatch]);

    return doesMatch;
}
*/