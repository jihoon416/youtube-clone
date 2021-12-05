import YouTubeIcon from '@mui/icons-material/YouTube'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'
import SearchIcon from '@mui/icons-material/Search'
import { Button } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Header = () => {
    return (
        <Container>
            <SubContainer>
                <Menu />
                <Youtube />
                <div style={{ fontWeight: 'bold' }}>
                    YouTube
                </div>
            </SubContainer>
            <SubContainer>
                <SearchBox placeholder='검색' />
                <Button style={{ backgroundColor: '#EEEEEE' }}>
                    <SearchIcon style={{ color: 'gray' }} />
                </Button>
            </SubContainer>
            <SubContainer>
                <AppsIcon />
                <HorizontalSpacing />
                <MoreVertIcon />
                <HorizontalSpacing />
                <img
                    src={'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d'}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                />
            </SubContainer>
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: 1000,
    width: '100%',
})

const SubContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

const HorizontalSpacing = styled.div({
    width: 16,
})

const Menu = styled(MenuIcon)({
    marginLeft: 16,
    width: 32,
    height: 32,
})

const Youtube = styled(YouTubeIcon)({
    paddingLeft: 16,
    color: 'red',
    width: 36,
    height: 36,
})

const SearchBox = styled.input({
    height: 28,
    width: 600,
})
