import styled from "styled-components"


const Container = styled.div`
    display:flex;
    width: "100vw";
`;

const Panel = styled.div`
    flex: ${(p:{flex:number}) => p.flex};
`;
export const SplitScreen = ({leftWidth=1, rightWidth=1, children}:{children:any, leftWidth?:number, rightWidth?:number}) => {
    const [left, right] = children
    return (
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>

            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}