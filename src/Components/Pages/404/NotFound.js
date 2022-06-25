import React, { useEffect } from 'react'
import { withTranslate } from 'react-redux-multilingual'
import { connect } from "react-redux";
import StyledNotFound from './StyledNotFound';
import { notifyError } from '../../Common/ToastNotification/ToastNotification';

const NotFound = ({ ...props }) => {
    useEffect(() => {
        console.log("render")
        notifyError(props.translate("page_not_found"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <StyledNotFound><h1>{props.translate("page_not_found")}</h1></StyledNotFound>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.translate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default withTranslate(connect(mapStateToProps, mapDispatchToProps)(NotFound));