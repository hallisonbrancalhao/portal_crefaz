import { FormEvent, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { BodyType } from "../types/BodyType";

export default function useProfileHook() {
    const auth = useContext(AuthContext);
    const [handleDisable, setHandleDisable] = useState(true);
    const userStr = localStorage.getItem('auth');
    const user = JSON.parse(`${userStr}`);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [image, setImage] = useState('');
    const [errorImage, setErrorImage] = useState(false);

    useEffect(() => {
        const imgUpload = auth.image64;
        const profileImage = user?.image;
        if (!!imgUpload) {
            return setImage(imgUpload);
        }
        if (!!profileImage) {
            return setImage(process.env.REACT_APP_BASE_ADMIN + user?.image);
        }
    }, [auth.image64, auth.user, user])

    const [formState, setFormState] = useState<BodyType>({
        id: user.id,
        fullName: user.fullName,
        birthDate: user.birthDate,
        maritalStatus: user.maritalStatus,
        numberChildren: user.numberChildren,
        address: user.address,
        city: user.city,
        postalCode: user.postalCode,
        complement: user.complement,
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
            auth.image64 = `${reader.result}`;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const handleAvancar = () => {
        navigate('/cracha');
    }

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!image) {
            return setErrorImage(true);
        }
        setLoading(true);
        localStorage.setItem('auth', JSON.stringify(formState));
        const status = await auth.savedata(JSON.stringify(formState));
        if (status === 200) {
            setHandleDisable(false);
            setErrorImage(false);
            setSuccess(true);
            setError(false);
        } else {
            setError(true);
            setSuccess(false);
        }
        setLoading(false);
    }, [formState, auth, image]);

    return {
        errorImage,
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