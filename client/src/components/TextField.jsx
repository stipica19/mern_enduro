import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const TextField = ({ name, value, onChange, title, required }) => {
  const [touch, setTouch] = useState(false);
  const isValid = value !== "";
  const { t } = useTranslation();

  return (
    <div className="date-form">
      <div className="form-control">
        <label>{title}</label>
        <input
          style={{
            border: touch ? !isValid && required && "1px solid red" : null,
          }}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={() => setTouch(true)}
        />
        {touch
          ? !isValid &&
            required && (
              <span className={!isValid && `error-input`}>
                {t("input_field")}
              </span>
            )
          : null}
      </div>
    </div>
  );
};

export default TextField;
