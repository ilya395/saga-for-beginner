import React, { useState } from "react"

export const BigForm = () => {

    const [email, setEmail] = useState('');
    const [exampleSelect, setExampleSelect] = useState(2);
    const [exampleMultySelect, setExampleMultySelect] = useState<number[]>([]);
    const [text, setText] = useState('Пиши');

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

    const changeCheckBox = () => {}

    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                    type="email" 
                    className="form-control" 
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
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={text}
                    onChange={changeTextArea}
                ></textarea>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
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
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                </div>
            </div>
        </form>
    )
}