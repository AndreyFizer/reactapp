export const APP_LOGIN = 'APP_LOGIN';

export const ApplicationStates = {
    AUTHORISED    : 'AUTHORISED',
    NOT_AUTHORISED: 'NOT_AUTHORISED'
};

export function setCredentials(state) {
    return {type: APP_LOGIN, state}
}