import { FormEvent, useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/Auth/AuthContext';
import { BodyType } from '../types/BodyType';

export default function useBadgeHook() {
    const auth = useContext(AuthContext);
    const userStr = localStorage.getItem('auth');
    const user = JSON.parse(`${userStr}`);
    const [image, setImage] = useState(auth.image64);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorImage, setErrorImage] = useState(false);

    const [formState, setFormState] = useState<BodyType>({
        id: user.id,
        nameBadge: user.fullName,
        phone: user.phone,
        email: user.email,
    })

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            setFormState(JSON.parse(`${data}`));
        }
    }, [setFormState, auth])

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
        setErrorImage(false);
        setLoading(true);
        if (!image) {
            setLoading(false);
            return setErrorImage(true);
        }
        const imageConvert = image.split(',', 2);
        const body = {
            nameBadge: formState.nameBadge,
            employeeId: formState.id,
            description: "Crachá",
            file: `${imageConvert[1]}`,
        };

        const stepSend = {
            id: user.id,
            step: "integrado"
        }

        console.log(stepSend);
        await auth.savedata(JSON.stringify(stepSend));
        const res = await auth.sendimage(JSON.stringify(body));

        if (res === 200) {
            setError(false);
            setLoading(false);
            setSuccess(true);
            localStorage.clear();
            window.location.href = 'https://social.eusoucrefaz.com.br/index.php?r=dashboard%2Fdashboard'
        } else {
            console.log(res);
            setSuccess(false);
            setLoading(false);
            setError(true);
        }
        setLoading(false);
    }, [image, formState.nameBadge, formState.id, user.id, auth]);

    return {
        errorImage,
        error,
        success,
        loading,
        convertImage,
        image,
        formState,
        setFormState,
        handleSend
    }
}
