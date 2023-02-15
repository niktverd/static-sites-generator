import { Loader } from 'components/Loader';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from './FormBase.module.css';

type FormBaseProps = {
    nameLabel?: string;
    phoneLabel?: string;
    namePlaceholder?: string;
    phonePlaceholder?: string;
    buttonCaption?: string;
    phoneMinLength?: number;
};

export const FormBase = ({
    nameLabel,
    phoneLabel,
    namePlaceholder,
    phonePlaceholder,
    buttonCaption,
    phoneMinLength = 7,
}: FormBaseProps) => {
    const [isFetching, setIsFetching] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const router = useRouter();

    const onSubmitDefault = (e: any) => {
        e.preventDefault();
    };

    const onClickSubmit = async () => {
        try {
            setIsFetching(true);

            if (name.length < 1) {
                return setNameError(true);
            }

            if (phone.length < phoneMinLength) {
                return setPhoneError(true);
            }

            fetch('report.php', {
                method: 'POST',
                body: JSON.stringify({
                    aff_click_id: '{offer}',
                    transaction_id: 777,
                    name,
                    phone,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const response = await fetch('post.php', {
                method: 'POST',
                body: JSON.stringify({
                    aff_click_id: '{offer}',
                    transaction_id: 777,
                    name,
                    phone,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                router.push('/thanks');
            }
        } catch (error) {
            console.log(error);
            setIsFetching(false);
        }

        console.log('go false');
        setIsFetching(false);
    };

    const handePhoneInput = (e: any) => {
        const nameVal = e.target.value;
        const filtered = nameVal.replace(/[^0-9.\-+]/g, '');
        if (nameVal !== filtered) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
        setPhone(filtered);
    };
    const handeNameInput = (e: any) => {
        const nameVal = e.target.value;
        setName(nameVal);
        setNameError(false);
    };

    console.log(isFetching);
    return (
        <form className={styles.container} onSubmit={onSubmitDefault}>
            {isFetching && <Loader />}
            <div className={styles.item}>
                {nameLabel && <div className={styles.label}>{nameLabel}</div>}
                <input
                    className={`${styles.input} ${nameError && styles.error}`}
                    type="text"
                    placeholder={namePlaceholder ?? ''}
                    onChange={handeNameInput}
                />
            </div>
            <div className={styles.item}>
                {phoneLabel && <div className={styles.label}>{phoneLabel}</div>}
                <input
                    value={phone}
                    className={`${styles.input} ${phoneError && styles.error}`}
                    type="text"
                    placeholder={phonePlaceholder ?? ''}
                    onChange={handePhoneInput}
                />
            </div>
            <button onClick={onClickSubmit} className={styles.button}>
                {(buttonCaption || 'submit').toUpperCase()}
            </button>
        </form>
    );
};
