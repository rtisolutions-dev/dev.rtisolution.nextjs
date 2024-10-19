// src/utils/ErrorMessages.ts
export enum ErrorMessages {
    NameRequired = 'Name is required',
    NameMinLength = 'Name must be at least 3 characters long.',
    EmailRequired = 'Email is required',
    EmailInvalid = 'Email is invalid.',
    AgePositive = 'Invalid age',
    AgeInteger = 'Invalid age',
    AgeTypeError = 'Age must be a valid number.',
    SaveProfileError = 'Failed to save profile. Please try again.',
    UpdateProfileError = 'Failed to update profile. Please try again.',
    UserProfileError='useProfile must be used within a ProfileProvider',
    DeleteProfileConfirmation='Are you sure you want to delete your profile?',
    DeleteProfileSuccess='Profile deleted successfully.',
    DeleteProfileError='Error deleting profile. Please try again.'
}
