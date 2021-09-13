import { LinkBottombar } from "../styles/styles";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";


const Bottombar = () => {

    const percentage = 20;

    return (
        <FooterBarStyle>
            <LinkBottombar to="/habitos">Hábitos</LinkBottombar>
            <LinkBottombar to="/hoje">
                <TodayProgressBar>
                    <CircularProgressbar
                        value={percentage}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            textColor: '#fff'
                        })}
                    />
                </TodayProgressBar>
            </LinkBottombar>
            <LinkBottombar to="/historico">Histórico</LinkBottombar>
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
`;

const TodayProgressBar = styled.div`
    height: 150px;
    width: 100px;
`;


export default Bottombar;

