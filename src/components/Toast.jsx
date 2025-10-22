import React, { useEffect, useState } from 'react';

const Toast = ({
    message,
    type = 'info',
    duration = 3000,
    onClose,
    isVisible = true,
}) => {
    const [show, setShow] = useState(isVisible);

    useEffect(() => {
        setShow(isVisible);
        if (isVisible && duration) {
            const timer = setTimeout(() => {
                setShow(false);
                onClose && onClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration, isVisible, onClose]);

    if (!show) return null;

    const toastTypeStyles = {
        success: 'bg-warning border-l-4 border-primary text-white',
        error: 'bg-danger border-l-4 border-primary text-white',
        info: 'bg-primary-disabled border-l-4 border-primary text-white'
    };

    const toastIcons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };

    return (
        <div
            className={`
                fixed bottom-20 right-4 
                min-w-[300px] max-w-[400px] 
                z-50 rounded-lg shadow-xl 
                bg-[var(--primary-color)] transition-all duration-300 ease-in-out
                ${toastTypeStyles[type]}
                animate-fade-in-down
            `}
        >
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">{toastIcons[type]}</span>
                    <p className="font-medium">{message}</p>
                </div>

                <button
                    className={`
                        opacity-100 hover:opacity-100 
                        transition-opacity duration-200 
                        text-2xl font-bold focus:outline-none
                    `}
                    onClick={() => {
                        setShow(false);
                        onClose && onClose();
                    }}
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Toast;
