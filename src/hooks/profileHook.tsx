import { FormEvent, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { BodyType } from "../types/BodyType";

export default function useProfileHook() {
    const auth = useContext(AuthContext);
    const [handleDisable, setHandleDisable] = useState(true);
    const [image, setImage] = useState('');
    const userStr = localStorage.getItem('auth');
    const user = JSON.parse(`${userStr}`);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [formState, setFormState] = useState<BodyType>({
        id: user.id,
        fullName: user.fullName,
        birthDate: user.birthDate,
        maritalStatus: user.maritalStatus,
        numberChildren: user.numberChildren,
        address: user.address,
        city: user.city,
        uf: user.uf,
        department: user.department,
        socialNetworks: user.socialNetworks,
        typeContract: user.typeContract,
        phone: user.phone,
        phoneContact: user.phoneContact,
        email: user.email,
        statusCode: user.statusCode,
    })

    const convertImage = (e: FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        let file: File = (target.files as FileList)[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setImage(`${reader.result}`);
            localStorage.setItem('profileImage', `${reader.result}`);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        localStorage.setItem('profileImage', image);
    };

    const handleAvancar = () => {
        navigate('/cracha');
    }

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        localStorage.setItem('auth', JSON.stringify(formState));
        const status = await auth.savedata(JSON.stringify(formState));
        if (status === 200) {
            setHandleDisable(false);
            setSuccess(true);
            setError(false);
        } else {
            setError(true);
            setSuccess(false);
        }
        setLoading(false);
    }, [formState, auth]);

    return {
        error,
        success,
        loading,
        image,
        convertImage,
        handleDisable,
        formState,
        setFormState,
        handleAvancar,
        handleSubmit,
    }
}