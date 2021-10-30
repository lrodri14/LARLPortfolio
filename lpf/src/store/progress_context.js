import React, { useState } from 'react'

const ProgressContext = React.createContext({
    activeSection: null,
    activateSection: () => {}
})

export function ProgressContextProvider(props){
    const [activeSection, setActiveSection] = useState({
        text: 'Main',
        class: 'main'
    })

    function activateSectionHandler(section){
        setActiveSection(section)
    }

    return (
        <ProgressContext.Provider value={{activeSection: activeSection, activateSection: activateSectionHandler}}>
            {props.children}
        </ProgressContext.Provider>
    )
}

export default ProgressContext