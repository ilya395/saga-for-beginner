import { useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

type WaitingDispatchDataType = {
    dispatchFormData: {
        waitingDispatch: boolean | null
    }
}
type SuccessDispatchDataType = {
    dispatchFormData: {
        successDispatch: boolean | null
    }    
}
type ErrorDispatchDataType = {
    dispatchFormData: {
        errorDispatch: boolean | null
    }      
}

type PropsType = {
    handleSubmit: (foo: any) => void
}

type RenderFieldType = {
    input: object
    id: string
    placeholder: string
    label: string
    type: string
    meta: {
        touched: boolean 
        error: undefined | string
        warning?: any
    },
    className: string
}

const validateEmail = (value: string) => {
    if (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value)) {
        return undefined
    }
    return "Ошибка в email'e"
}

const required = (value: string) => {
    console.log(value, !!value)
    if (!!value) {
        return undefined
    } 
    return "Обязательное поле"
} 

const renderField = ({ input, id, placeholder, label, type, className, meta: { touched, error, warning } }: RenderFieldType) => {
    // console.log(input)
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type} 
                className={`${className} ${(touched && error) ? 'is-invalid' : ''}`}
                placeholder={placeholder ? placeholder : ''}
                {...input}
                data-custom-error={error}
                data-custom-touched={touched}
            />
            {
                touched && (error && <span className="is-invalid" style={{color: '#dc3545'}}>{error}</span>)
            }
        </div>
    )
}

const renderFieldFoecheckBox = ({ input, id, placeholder, label, type, className, meta: { touched, error, warning } }: RenderFieldType) => {
    // console.log(input)
    return (
        <div className="form-group">
            <div className="form-check">
                <input
                    type={type} 
                    className={`${className} ${(touched && error) ? 'is-invalid' : ''}`}
                    placeholder={placeholder ? placeholder : ''}
                    {...input}
                    data-custom-error={error}
                    data-custom-touched={touched}
                />
                <label className="form-check-label" htmlFor={id}>{label}</label>
                {
                    touched && (error && <><br /><span className="is-invalid" style={{color: '#dc3545'}}>{error}</span></>)
                }
            </div>
        </div>
    )
}

const CustomReduxForm: React.FC<PropsType> = (props) => {
    const { handleSubmit } = props;

    // const startValidForm = useSelector((state: {bigForm: {requestValid: boolean}}) => state.bigForm.requestValid);

    // const submitForm = (values: any) => {
    //     // event.preventDefault();

    //     console.log('yep', values)
    // }

    // useEffect(() => {
    //     startValidForm && handleSubmit(submitForm);
    // }, [startValidForm]);

    const waitingDispatch = useSelector<WaitingDispatchDataType>(state => state.dispatchFormData.waitingDispatch);
    const successDispatch = useSelector<SuccessDispatchDataType>(state => state.dispatchFormData.successDispatch);
    const errorDispatch = useSelector<ErrorDispatchDataType>(state => state.dispatchFormData.errorDispatch);
    console.log(waitingDispatch, successDispatch, errorDispatch)
    return (
        <form onSubmit={handleSubmit}>
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
            
            <Field
                className="form-check-input" 
                type="checkbox" 
                id="defaultCheck1"
                // component="input"
                name="check-box"
                component={renderFieldFoecheckBox}
                label="Default checkbox"
                validate={[required,]}
            />
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
            {
                waitingDispatch && <p><span>Отпраляем...</span></p>
            }
            {
                successDispatch && <p><span>Отправлено!</span></p>
            }
            {
                errorDispatch && <p><span>Не получилось отправить...</span></p>
            }
        </form>
    );
}

const createReduxForm = reduxForm({
    form: 'redux-form'
});

const ReduxForm = createReduxForm(CustomReduxForm);

export default ReduxForm;