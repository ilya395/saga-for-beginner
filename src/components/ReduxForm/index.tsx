import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

type PropsType = {
    handleSubmit: (foo: any) => void
}

type RenderFieldType = {
    input: any
    id: string
    placeholder: string
    label: string
    type: string
    meta: {
        touched: any 
        error: any
        warning: any
    }
}

const validateEmail = (value: string) => value && (value == '')// !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)
    ? 'Ahtung!'
    : undefined

const required = (value: any) => value ? undefined : "Обязательное поле";

const renderField = ({ input, id, placeholder, label, type, meta: { touched, error, warning } }: RenderFieldType) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
            type={type} 
            className="form-control"
            id={id}
            placeholder={placeholder}
            {...input}
        />
        {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )

const CustomReduxForm: React.FC<PropsType> = (props) => {
    const { handleSubmit } = props;

    const startValidForm = useSelector((state: {bigForm: {requestValid: boolean}}) => state.bigForm.requestValid);

    // const submitForm = (values: any) => {
    //     // event.preventDefault();

    //     console.log('yep', values)
    // }

    // useEffect(() => {
    //     startValidForm && handleSubmit(submitForm);
    // }, [startValidForm]);

    return (
        <form onSubmit={handleSubmit}>
            {/* <Field
                type="tel" 
                className={`form-control`} 
                id="exampleFormControlInput_tel" 
                placeholder={'+7'}
                name="phone"
                component={renderField}
                // validate={[validateEmail,]}
            /> */}
            {/* <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <Field 
                    type="email" 
                    className={`form-control`} 
                    id="exampleFormControlInput1" 
                    placeholder={'Иван@gmcs.ru'}
                    name="email"
                    component="input"
                    
                />
            </div> */}
            <Field
                type="email" 
                className={`form-control`} 
                id="exampleFormControlInput1" 
                placeholder={'Иван@gmcs.ru'}
                name="email"
                component={renderField}
                label="Email address"
                validate={[required, validateEmail,]}
            />
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Example select</label>
                <Field
                    className="form-control"
                    id="exampleFormControlSelect1"
                    component="select"
                    name="select"   
                    type="select"                
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </Field>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                <Field
                    multiple={true}
                    className="form-control" 
                    id="exampleFormControlSelect2"
                    component="select"
                    name="multi-select"
                    value={[]}
                    type="select-multiple"
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    {/* {
                        ['1', '2', '3', '4', '5'].map((item, index) => <option value={item} key={index}>{item}</option>)
                    } */}
                </Field>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <Field
                    className={`form-control`}
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Ваш комментарий"
                    type="textarea"
                    component="textarea"
                    name="text-area"
                />
            </div>
            <div className="form-group">
                <div className="form-check">
                    <Field
                        className="form-check-input" 
                        type="checkbox" 
                        id="defaultCheck1"
                        component="input"
                        name="check-box"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Default checkbox
                    </label>
                </div>    
            </div>
            <div className="form-group">
                <div className="form-check form-check-inline">
                    <Field 
                        className={`form-check-input`} 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio1" 
                        value="option1"
                        component="input"                       
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">Первый</label>
                </div>
                <div className="form-check form-check-inline">
                    <Field
                        className={`form-check-input`} 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio2" 
                        value="option2"
                        component="input"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">Второй</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

const createReduxForm = reduxForm({
    form: 'redux-form'
});

const ReduxForm = createReduxForm(CustomReduxForm);

export default ReduxForm;