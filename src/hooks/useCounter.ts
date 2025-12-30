import { useState, useCallback } from 'react';

interface UseCounterOptions {
    initialValue?: number;
    step?: number;
}

interface UseCounterReturn {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    incrementBy: (value: number) => void;
    decrementBy: (value: number) => void;
}

export const useCounter = (options: UseCounterOptions = {}): UseCounterReturn => {
    const { initialValue = 0, step = 1 } = options;
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount((prev) => prev + step);
    }, [step]);

    const decrement = useCallback(() => {
        setCount((prev) => prev - step);
    }, [step]);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]);

    const incrementBy = useCallback((value: number) => {
        setCount((prev) => prev + value);
    }, []);

    const decrementBy = useCallback((value: number) => {
        setCount((prev) => prev - value);
    }, []);

    return {
        count,
        increment,
        decrement,
        reset,
        incrementBy,
        decrementBy,
    };
};
