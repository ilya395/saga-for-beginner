import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { validFormUnSuccess } from "../../store/actions";
// import { RootReducerType } from '../../store/reducer'

export const BigForm = () => {

    const dispatch = useDispatch();

    // const [formData, setFormData] = useState({});

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState<null | boolean>(null);

    const [exampleSelect, setExampleSelect] = useState(2);
    const [exampleMultySelect, setExampleMultySelect] = useState<Array<number>>([]);
    
    const [text, setText] = useState<null | string>(null);
    const [validText, setValidText] = useState<null | boolean>(null);

    const [checkBox, setCheckBox] = useState<boolean>(false);

    const [radioBtn, setRadioBtn] = useState<string | null>(null);
    const [validRadioBtn, setValidRadioBtn] = useState<null | boolean>(null);

    const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const changeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.currentTarget.value);
    }

    const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setExampleSelect(+event.currentTarget.value);
    }

    const changeMultySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let result = Array.from(event.currentTarget.selectedOptions, option => +option.value);
        setExampleMultySelect(result);
    }

    const changeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckBox(event.currentTarget.checked);
    }

    const changeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioBtn(event.currentTarget.value)
    }

    const startValidForm = useSelector((state: {bigForm: {requestValid: boolean}}) => state.bigForm.requestValid);

    const submitForm = () => { // event: React.FormEvent<HTMLFormElement>
        // event.preventDefault();

        console.log('submit start!');

        const emailValidResult = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        // console.log(emailValidResult)
        if (emailValidResult !== null) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
            dispatch(validFormUnSuccess())
        }

        if (text !== null && typeof text !== 'undefined' && text !== '') {
            setValidText(false)
        } else {
            setValidText(true)
            dispatch(validFormUnSuccess())
        }
        console.log(radioBtn)
        if (radioBtn !== null) {
            setValidRadioBtn(false)
        } else {
            setValidRadioBtn(true)
            dispatch(validFormUnSuccess())
        }
    }

    useEffect(() => {
        startValidForm && submitForm();
    }, [startValidForm]);

    return (
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                    type="email" 
                    className={`form-control ${validEmail ? 'is-invalid' : ''}`} 
                    id="exampleFormControlInput1" 
                    placeholder={'Иван@gmcs.ru'} 
                    value={email}
                    onChange={changeEmail}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Example select</label>
                <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    value={exampleSelect}
                    onChange={changeSelect}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                <select 
                    multiple 
                    className="form-control" 
                    id="exampleFormControlSelect2"
                    onChange={changeMultySelect}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea 
                    className={`form-control ${validText ? 'is-invalid' : ''}`}
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Ваш комментарий"
                    // value={text}
                    onChange={changeTextArea}
                ></textarea>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value={String(checkBox)} 
                        id="defaultCheck1"
                        onChange={changeCheckBox}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Default checkbox
                    </label>
                </div>    
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <input 
                        className={`form-check-input ${validRadioBtn ? 'is-invalid' : ''}`} 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio1" 
                        value="option1" 
                        onChange={changeRadio}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">Первый</label>
                </div>
                <div className="form-check form-check-inline">
                    <input 
                        className={`form-check-input ${validRadioBtn ? 'is-invalid' : ''}`} 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio2" 
                        value="option2"
                        onChange={changeRadio}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">Второй</label>
                </div>
            </div>
        </form>
    )
}