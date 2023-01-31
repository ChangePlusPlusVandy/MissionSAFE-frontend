const RegistrationHelpers = {
    // Returns true/false if input matches pattern for valid email
    validateEmail(emailInput) {
        return emailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    },

    // Returns true/false if input matches pattern for valid password:
    //     - Minimum 8 characters, one lowercase, one uppercase,
    //       one number, one special character
    validatePassword(passwordInput) {
        return passwordInput.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
    },

    // Returns true/false if input matches pattern for valid social security number
    validateSSN(ssnInput) {
        return ssnInput.match(/^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/);
    },

    // Returns true/false if input matches pattern for valid US phone number
    validatePhoneNumber(phoneNumberInput) {
        return phoneNumberInput.match(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]\d{4}$/);
    } 
}

export default RegistrationHelpers;