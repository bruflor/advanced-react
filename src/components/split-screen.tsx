import styled from "styled-components"


const Container = styled.div`
    display:flex;
    width: "100vw";
`;

const Panel = styled.div`
    flex:1;
`;
export const SplitScreen = ({Left, Right}:{Left:any, Right:any}) => {
    return (
        <Container>
            <Panel>
                <Left />
            </Panel>

            <Panel>
                <Right />
            </Panel>
        </Container>
    )
}