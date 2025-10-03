import { useState, useEffect } from 'react';

// Глобальная переменная для хранения состояния между компонентами
let globalResources = 200;
let listeners: ((value: number) => void)[] = [];

export const useGameResources = () => {
    const [resources, setResources] = useState(globalResources);

    useEffect(() => {
        // Добавляем слушатель изменений
        listeners.push(setResources);
        
        return () => {
            // Удаляем слушатель при размонтировании
            listeners = listeners.filter(listener => listener !== setResources);
        };
    }, []);

    const updateResources = (newValue: number | ((prev: number) => number)) => {
        if (typeof newValue === 'function') {
            globalResources = (newValue as Function)(globalResources);
        } else {
            globalResources = newValue;
        }
        
        // Уведомляем всех слушателей
        listeners.forEach(listener => listener(globalResources));
    };

    return [resources, updateResources] as const;
};