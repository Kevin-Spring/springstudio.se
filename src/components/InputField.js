import React from 'react'

export const InputField = ({
  classNameGroup,
  classNameInput,
  classNameLabel,
  inputType,
  inputId,
  inputName,
  inpuValue,
  inputOnChange,
  inputPlaceholder,
  inputChecked,
  labelHtmlFor,
  labelContent,
}) => {
  return (
    <div className={classNameGroup}>
      <input
        className={classNameInput}
        type={inputType}
        id={inputId}
        name={inputName}
        value={inpuValue}
        placeholder={inputPlaceholder}
        checked={inputChecked}
        onChange={inputOnChange}
      />
      <label className={classNameLabel} htmlFor={labelHtmlFor}>
        {labelContent}
      </label>
    </div>
  )
}
