import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export function FormProvider ({children}) {
    const [viewForm, setViewForm] = useState(false);

    return(
        <FormContext.Provider value={{
            viewForm,
            setViewForm
        }}>
            {children}
        </FormContext.Provider>
    )
}