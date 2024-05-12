import { useState, useEffect } from 'react';

function useDebouce(valueDebouce: string, delay: number) {
    const [value, setValue] = useState<string>(valueDebouce);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setValue(valueDebouce);
        }, delay);

        return () => {
            clearTimeout(timerId);
        };
    }, [delay, valueDebouce]);
    return value;
}

export default useDebouce;
