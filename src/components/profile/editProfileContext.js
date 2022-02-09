import { createContext, useEffect, useState } from "react";

const EditProfileContext = createContext();
const profile = {
    profile: 'https://static.wikia.nocookie.net/theoffice/images/b/be/Character_-_MichaelScott.PNG',
    name: 'Michael Scott',
    email: 'michael_scott@theoffice.us',
    dob: new Date(1965, 2, 15),
    mobile: '+1-202-555-0101',
    address: {
        state: 'PA',
        country: 'US',
        city: 'Scranton',
    },
    about: "I became a salesman because of people. I love making friends. But then I was promoted to manager at a very young age. And I still try to be a friend first. But, you know... when you're very successful, your co-workers look at you differently.",

    social: {
        facebook: 'https://www.facebook.com/michael.scott.office',
        twitter: 'https://twitter.com/tobyhater?lang=en',
        instagram: 'https://www.instagram.com/michaelscottdaily/?hl=en',
        linkedin: 'https://www.linkedin.com/in/michael-scott-122570130/',
        snapchat: '',
        stackoverflow: '',
    },
    office: {
        name: 'of',
        team: 'team',
        role: 'role',
        skillSet: 'skill',
    },
    interests: {
        food: 'Ice cream, Hostess apple pie',
        music: 'The Longest Time',
        sports: 'Ice Hockey',
        books: '',
    }
};

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

    useEffect(() => {
        async function getProfile() {
            setProfileLoading(true);

            // const response = await fetch(`/api/profile/${userId}`);
            // const profileData = await response.json();
            const profileData = profile;

            setProfileFieldValues(profileData);
            setProfileLoading(false);
        }

        getProfile();
    }, []);

    const onSaveProfile = async () => {
        setUpdatingProfile(true);
        const requestObj = {
            ...personalInfo,
            social: socialInfo,
            interests: interestsInfo,
            office: officialInfo,
        };
        if (passwordInfo.current?.length > 3 && passwordInfo.new?.length > 3 && passwordInfo?.new === passwordInfo?.confirm) {
            requestObj.newPassword = passwordInfo.new;
            requestObj.currentPassword = passwordInfo.current;
        }
        console.log(requestObj);
        // const response = await fetch(`/v1/users/${user.userId}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': user.accessToken
        //     },
        //     body: JSON.stringify({
        //         requestObj,
        //     }),
        // });
        // const profile = await response.json();
        setTimeout(() => {
            setProfileFieldValues(profile);
            setUpdatingProfile(false);
        }, 2000);
    }

    const setProfileFieldValues = (profile) => {
        const personalFields = pickByKeys(profile, ['name', 'email', 'dob', 'mobile', 'about']);
        personalFields.country = profile.address.country;
        personalFields.state = profile.address.state;
        personalFields.city = profile.address.city;
        personalFields.image = profile.profile;
        setPersonalInfo(personalFields);
        setSocialInfo({...profile.social});
        setInterestsInfo({...profile.interests});
        setOfficialInfo({...profile.office});
        setPasswordInfo({ current: '', new: '', confirm: '' });
    }

    const updatePersonalInfo = (key, eve) => {
        if (['dob', 'profile'].includes(key)) {
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
