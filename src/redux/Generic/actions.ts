export function actionStart(label: any) {
    return (dispatch: any) => {
        // dispatch({type: 'API_START', payload: label});
        dispatch({ type: label + '_REQUEST', payload: {} });
    };
}

export function actionSuccess(label: any, successResponse = undefined) {
    return (dispatch: any) => {
        dispatch({ type: label + '_SUCCESS', payload: { label, successResponse: successResponse } });
    };
}


export function actionFailure(label: any, error = undefined) {
    return (dispatch: any) => {
        dispatch({ type: label + '_FAILURE', payload: { label, error } });
    };
}
