import { useEffect, useState } from 'react';

export default function useBottom() {

    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;

        if (scrollTop + window.innerHeight + 200 >= scrollHeight) {
            setIsBottom(true);
        }

    };

    return {
        isBottom,
        setIsBottom
    };

}
