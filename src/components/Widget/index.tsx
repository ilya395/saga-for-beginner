import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, dispatchFormData, requestValidForm } from '../../store/actions';
import { BigForm } from '../BigForm';
import ReduxForm from '../ReduxForm';
import './Widget.css';

const Widget = () => {
    const [modalClasses, setModalClasses] = useState('modal fade');
    const dispatch = useDispatch();
    const status = useSelector((state: {modal: {modal: boolean}}) => state.modal.modal);
    const formType = useSelector((state: {app: {formType: string}}) => state.app.formType);

    useEffect(() => {
        status 
            ? setModalClasses("modal fade show show__block")
            : setModalClasses("modal fade")
    }, [status]);

    const closePlz = () => {
        dispatch(closeModal());
    }

    const savePlz = (values: any) => {
        dispatch(requestValidForm());
        console.log(values)
    }

    const submitPlz = (values: any) => {
        // console.log(values)
        // let result = '?';
        // let count = 0;
        // for (let i in values) {
        //     result += count === 0 ? `${i}=${values[i]}` : `&${i}=${values[i]}`;
        //     count += 1;
        // }
        // console.log(result)
        // dispatch(requestValidForm());
        // диспатчим отправку данных на бэк
        dispatch(dispatchFormData(values));
    }
    
    return (
        <div className={modalClasses} tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closePlz}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    {
                        formType === 'custom'
                            ? <BigForm />
                            : <ReduxForm onSubmit={submitPlz} />
                    }
                </div>
                {/* <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" onClick={savePlz}>Save changes</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePlz}>Close</button>
                </div> */}
            </div>
            </div>
        </div>
    );
}

export default Widget;