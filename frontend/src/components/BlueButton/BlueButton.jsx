import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledBlueButton = styled.button`
    width: 20rem;
    padding: 2rem;
    margin: 2rem;
    background-color: ${colors.secondary};
    border: none;
    border-radius: 8px;
    & {children} {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${colors.primary};
    }
`

function BlueButton ({children}) {
    return (
        <StyledBlueButton>{children}</StyledBlueButton>
    )
};

export default BlueButton;