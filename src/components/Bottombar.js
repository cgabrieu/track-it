import styled from "styled-components"

const Bottombar = () => {
    return (
        <FooterBarStyle>
            
        </FooterBarStyle>
    );

};

const FooterBarStyle = styled.div`
    position: fixed;
    bottom: 0; right: 0; left: 0;
    height: 70px;
    padding: 0 36px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export default Bottombar;

