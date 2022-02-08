import { createContext, useEffect, useState } from "react";

const EditProfileContext = createContext();
const profile = {
    fullName: 'Michael Scott',
    email: 'michael_scott@gmail.com',
    dob: new Date(1965, 2, 15),
    mobile: '',
    state: 'Pennsylvania',
    country: 'US',
    about: "I became a salesman because of people. I love making friends. But then I was promoted to manager at a very young age. And I still try to be a friend first. But, you know... when you're very successful, your co-workers look at you differently.",

    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    snapchat: '',
    stackoverflow: '',

    cnOffice: '',
    cnTeam: '',
    role: '',
    skillset: '',

    food: '',
    music: '',
    sports: '',
    books: '',
};

const pickByKeys = (obj, keys) => {
    return Object.fromEntries(
        keys.filter(key => key in obj)
            .map(key => [key, obj[key]])
    );
}

export function EditProfileProvider({ children }) {
    const [profileLoading, setProfileLoading] = useState(true);
    const [personalInfo, setPersonalInfo] = useState({});
    const [socialInfo, setSocialInfo] = useState({});
    const [interestsInfo, setInterestsInfo] = useState({});
    const [officialInfo, setOfficialInfo] = useState({});

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
        setProfileLoading(true);
        // const response = await fetch('/api/profile/getProfile');
        // const profile = await response.json();

        const keyMap = {
            personal: ['fullName', 'email', 'dob', 'mobile', 'state', 'country', 'about'],
            official: ['cnOffice', 'cnTeam', 'role', 'skillset'],
            social: ['facebook', 'twitter', 'instagram', 'linkedin', 'snapchat', 'stackoverflow'],
            interests: ['food', 'music', 'sports', 'books'],
        }

        setPersonalInfo(pickByKeys(profile, keyMap.personal));
        setSocialInfo(pickByKeys(profile, keyMap.social));
        setInterestsInfo(pickByKeys(profile, keyMap.interests));
        setOfficialInfo(pickByKeys(profile, keyMap.official));
        setProfileLoading(false);
    }

    const updatePersonalInfo = (key, eve) => {
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
            updateOfficialInfo
        }}>
            {children}
        </EditProfileContext.Provider>
    );
}

export default EditProfileContext;
