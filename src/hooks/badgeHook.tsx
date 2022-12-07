import { FormEvent, useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/Auth/AuthContext';
import { BodyType } from '../types/BodyType';

export default function useBadgeHook() {
    const auth = useContext(AuthContext);
    const userStr = localStorage.getItem('auth');
    const user = JSON.parse(`${userStr}`);
    const [image, setImage] = useState('');

    const [formState, setFormState] = useState<BodyType>({
        id: user.id,
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
    })

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            setFormState(JSON.parse(`${data}`));
        }
        if (!image) {
            setImage(`${localStorage.getItem('profileImage')}`);
        }
    }, [setFormState, image, auth])

    const convertImage = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        let file: File = (target.files as FileList)[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setImage(`${reader.result}`);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const handleSend = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("enviar")
        const imageConvert = image.split(',', 2);
        localStorage.setItem('profileImageSend', `${imageConvert[1]}`);

        const body = {
            employeeId: formState.id,
            description: "Crachá",
            file: `${localStorage.getItem('profileImageSend')}`,
        };

        const responseImg = await auth.sendimage(JSON.stringify(body));
        console.log("responseImg", responseImg)
        const responseData = JSON.stringify(formState);
        console.log("responseData", responseData)

        if (!!responseImg && !!responseData) {
            window.location.href = 'https://rodrigomartelli.humhub.com/s/espaco-de-boas-vindas/'
        }
    }, [formState, auth, image]);

    return {
        convertImage,
        image,
        formState,
        setFormState,
        handleSend
    }
}
