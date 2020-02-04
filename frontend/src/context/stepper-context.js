import React, {useState, useEffect, useMemo} from 'react';

const  StepperContext = React.createContext();

export function StepperProvider(props) {
    const [activarNext, setActivarNext] = useState(null)
    
    const callback = (count) => {
        setActivarNext(count)
     }

     const value = useMemo(() => {
         return({
             activarNext,
             callback
         })
     }, [activarNext, callback])

     return <StepperContext.Provider value={value} {...props}/>
}

export function useStepper() {
    const context = React.useContext(StepperContext);

    if (!context) {
        throw new Error('useStepper debe estar dentro del proveedor StepperContext')

    }
    return context;

}
