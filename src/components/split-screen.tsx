import styled from "styled-components"


const Container = styled.div`
    display:flex;
    width: "100vw";
`;

const Panel = styled.div`
    flex: ${(p:{flex:number}) => p.flex};
`;
export const SplitScreen = ({Left, leftWidth=1, rightWidth=1, Right}:{Left:any, Right:any, leftWidth?:number, rightWidth?:number}) => {
    return (
        <Container>
            <Panel flex={leftWidth}>
                <Left />
            </Panel>

            <Panel flex={rightWidth}>
                <Right />
            </Panel>
        </Container>
    )
}