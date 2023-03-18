import React, { useRef, useState, ChangeEventHandler } from "react";
import {FiChevronDown} from 'react-icons/fi'
import './select-input.styles.scss';

type SelectInputProp = {
    options: string[];
    placeHolder: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}


const SelectInput: React.FC<SelectInputProp> = ({options, onChange, placeHolder}) => {

    const selectRef = useRef<HTMLDivElement>(null);
    const [choice, setChoice] = useState(placeHolder)


    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        setChoice(e.target.value)
        if(selectRef.current) {
            const selectOptions: HTMLLabelElement[] = [...selectRef.current.querySelectorAll('label')];
            selectOptions.map(option => {
                if(option.innerText === e.target.value) {
                    option.classList.add('select-input__option--selected')
                }else {
                    option.classList.remove('select-input__option--selected')
                }
            })
        }

        if(selectRef.current) {
            const selectOptionContainer = selectRef?.current?.querySelector('#options');
            if(selectOptionContainer) {
                selectOptionContainer.classList.remove('select-input__options--show')
            }
        }
        onChange(e);
    }

    const onLabelClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        e
        if(selectRef.current) {
            const selectOptionContainer = selectRef?.current?.querySelector('#options');
            if(selectOptionContainer) {
                selectOptionContainer.classList.toggle('select-input__options--show')
            }
        }
    }

    return (     
        <div className="select-input" ref={selectRef}>
            <span className="select-input__label" onClick={onLabelClick}>{choice} <FiChevronDown /></span>
            <div className="select-input__options" id="options">
            {
                options.map(option => {
                    return (
                        <label className="select-input__option" htmlFor={option} key={option}>{option}
                            <input type={'radio'} id={option} name='gender' value={option} onChange={onChangeHandler} />
                        </label>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SelectInput;