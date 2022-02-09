import { createContext, useEffect, useState } from "react";
import axios from "../../axios";

const EditProfileContext = createContext();
const pickByKeys = (obj, keys) => {
    return Object.fromEntries(
        keys.filter(key => key in obj)
            .map(key => [key, obj[key]])
    );
}

export function EditProfileProvider({ children }) {
    const [profileLoading, setProfileLoading] = useState(true);
    const [updatingProfile, setUpdatingProfile] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({});
    const [socialInfo, setSocialInfo] = useState({});
    const [interestsInfo, setInterestsInfo] = useState({});
    const [officialInfo, setOfficialInfo] = useState({});
    const [passwordInfo, setPasswordInfo] = useState({});
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        async function getProfile() {
            setProfileLoading(true);
            const { data: profileData } = await axios.get('http://localhost:3005/v1/users/profile');
            setProfileFieldValues(profileData);
            setUserId(profileData.id);
            setProfileLoading(false);
        }

        getProfile();
    }, []);

    const onSaveProfile = async () => {
        setUpdatingProfile(true);
        const requestObj = {
            ...pickByKeys(personalInfo, ['name', 'email', 'dob', 'mobile', 'about']),
            address: {
                ...pickByKeys(personalInfo, ['country', 'state', 'city']),
            },
            social: socialInfo,
            interests: interestsInfo,
            office: officialInfo,
        };
        if (passwordInfo.current?.length > 3 && passwordInfo.new?.length > 3 && passwordInfo?.new === passwordInfo?.confirm) {
            requestObj.newPassword = passwordInfo.new;
            requestObj.currentPassword = passwordInfo.current;
        }
        if(personalInfo.newImage) {
            requestObj.picture = /,(.+)/.exec(personalInfo.newImage)[1];
        }
        const response = await axios.patch(`http://localhost:3005/v1/users/${userId}`, requestObj);
        setProfileFieldValues(response.data);
        setUpdatingProfile(false);
    }

    const setProfileFieldValues = (profile) => {
        const personalFields = pickByKeys(profile, ['name', 'email', 'dob', 'mobile', 'about']);
        personalFields.country = profile.address.country;
        personalFields.state = profile.address.state;
        personalFields.city = profile.address.city;
        personalFields.picture = profile.picture ? `http://localhost:3005/${profile.picture}` : null;
        setPersonalInfo(personalFields);
        setSocialInfo({...profile.social});
        setInterestsInfo({...profile.interests});
        setOfficialInfo({...profile.office});
        setPasswordInfo({ current: '', new: '', confirm: '' });
    }

    const updatePersonalInfo = (key, eve) => {
        if (['dob', 'newImage'].includes(key)) {
            setPersonalInfo({ ...personalInfo, [key]: eve });
            return;
        }
        setPersonalInfo({ ...personalInfo, [key]: eve.target.value });
    }
    const updateSocialInfo = (key, eve) => {
        setSocialInfo({ ...socialInfo, [key]: eve.target.value });
    }
    const updateInterestsInfo = (key, eve) => {
        setInterestsInfo({ ...interestsInfo, [key]: eve.target.value });
    }
    const updateOfficialInfo = (key, eve) => {
        setOfficialInfo({ ...officialInfo, [key]: eve.target.value });
    }
    const updatePasswordInfo = (key, eve) => {
        setPasswordInfo({ ...passwordInfo, [key]: eve.target.value });
    }

    return (
        <EditProfileContext.Provider value={{
            personalInfo,
            socialInfo,
            interestsInfo,
            officialInfo,
            profileLoading,
            updatePersonalInfo,
            updateSocialInfo,
            updateInterestsInfo,
            updateOfficialInfo,
            passwordInfo,
            updatePasswordInfo,
            onSaveProfile,
            updatingProfile
        }}>
            {children}
        </EditProfileContext.Provider>
    );
}

export default EditProfileContext;
