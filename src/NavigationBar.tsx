import styled from "@emotion/styled"
import HomeIcon from '@mui/icons-material/Home'
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Button } from "@mui/material";

export const NavigationBar = () => {
    return (
        <Container>
            <SubContainer>
                <HomeIcon /> <HorizontalSpacing />홈
            </SubContainer>
            <SubContainer>
                <ExploreIcon /> <HorizontalSpacing />탐색
            </SubContainer>
            <SubContainer>
                <SubscriptionsIcon /> <HorizontalSpacing />구독
            </SubContainer>
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 200,
    backgroundColor: 'white',
    height: 2000,
})

const SubContainer = styled(Button)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
    paddingLeft: 20,
    width: '100%',
    color: 'black'
})

const HorizontalSpacing = styled.div({
    width: 16,
})