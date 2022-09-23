import '../Main/Preloader.scss';
import { useState } from 'react';
import { useEffect } from 'react';

export const Preloader = () => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 100);
    }, [])

    const loadState = isLoading ? "loading-div active" : "loading-div show";

    return (
        <div className={`loading-div ${loadState}`} id="loading-div">
            <div><span></span> <span></span> <span></span></div>
        </div>
    )
}
