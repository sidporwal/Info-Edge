fetchUserContactInfo = () => {
    const contactLinks = document.getElementsByClassName("pv-contact-info__contact-link");
    const birthDate = document.getElementsByClassName("pv-contact-info__contact-item");
    const contactNo = document.getElementsByClassName("pv-contact-info__contact-type ci-phone");
    const data = {
        userProfileUrl: contactLinks[0].innerText,
        address: contactLinks[1].innerText,
        mail: contactLinks[2].innerText,
        dob: birthDate[0].innerText,
        contactNo: contactNo[0].children[2].innerText
    };
    console.log(data);
}

goToProfilePage = () => {
    document.getElementsByClassName("ember-view link-without-visited-state cursor-pointer text-heading-small inline-block break-words")[0].click();
    setTimeout(fetchUserContactInfo, 3000);
}

const fetchUserInfo = () => {
    document.getElementsByClassName("global-nav__primary-link-text")[5].click();
    setTimeout(() => {
        document.getElementsByClassName("ember-view link-without-hover-state")[0].click();
        setTimeout(goToProfilePage, 5000);
    }, 1000);
}

setTimeout(fetchUserInfo, 3000);