import React, { useEffect, useState, useRef } from 'react';
import validates from './validates';
import useDebouce from './useDebouce';

type ValidateInputProps = {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (value: any) => void;
    name: string;
    className?: string;
};

function ValidateInput({ type = 'text', placeholder, value = '', onChange, name, className }: ValidateInputProps) {
    const [state, setState] = useState<string>(value);
    const valueDebouce = useDebouce(state, 500);
    const isChanged = useRef<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const messRef = useRef<HTMLParagraphElement | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            isChanged.current = true;
            setMessage(' ');
            setState(e.target.value);
        }
    };

    useEffect(() => {
        if (isChanged.current && !validates.required(valueDebouce)) {
            setMessage('Vui lòng không để trống!');
            return;
        }
        switch (type) {
            case 'phone': {
                if (isChanged.current && !validates.phone(valueDebouce)) {
                    setMessage('Phone is not valid');
                }
                break;
            }
            case 'email': {
                if (isChanged.current && !validates.email(valueDebouce)) {
                    setMessage('Email is not valid');
                }
                break;
            }
            //case .....
            default: {
                if (messRef.current) messRef.current.textContent = 'Vui lòng không để trống!';
            }
        }
    }, [valueDebouce, type, isChanged]);

    return (
        <div className='form-group'>
            <input
                type={type === 'password' ? 'password' : 'text'}
                placeholder={placeholder}
                value={state}
                name={name}
                className={'form-control ' + className}
                onChange={handleChange}
            />
            <p className='text-danger mt-2' ref={messRef}>
                {message}
            </p>
        </div>
    );
}

export default ValidateInput;
