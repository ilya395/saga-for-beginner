import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/actions';
import { BigForm } from '../BigForm';
import './Widget.css';

const Widget = () => {
    const [modalClasses, setModalClasses] = useState('modal fade');
    const dispatch = useDispatch();
    const status = useSelector((state: {modal: {modal: boolean}}) => state.modal.modal);

    useEffect(() => {
        status 
            ? setModalClasses("modal fade show show__block")
            : setModalClasses("modal fade")
    }, [status]);

    const closePlz = () => {
        dispatch(closeModal());
    }

    const savePlz = () => {}
    
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
                <BigForm />
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closePlz}>Close</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Widget;