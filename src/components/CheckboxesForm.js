import { CheckboxesFormStyle } from '../styles/styles'

function CheckboxesForm ({ handleCheckboxChange, isLoading, listDays }) {
    
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return ( 
        <CheckboxesFormStyle>
            {weekdays.map((e, index) =>
                <li 
                    key={index}
                    disabled={isLoading}
                    onClick={handleCheckboxChange}
                    value={index}
                    state={listDays.includes(index) ? "checked" : "unchecked"}
                >
                {e}
                </li>
            )}

        </CheckboxesFormStyle> 
    );
}

export default CheckboxesForm;