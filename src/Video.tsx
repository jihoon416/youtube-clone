import styled from "@emotion/styled"

interface Props {
    image: string
    title: string
    youtuberImage: string
    youtuberName: string
    viewCount: number
    length: string
}

export const Video = (props: Props) => {
    const {
        image,
        length,
        title,
        viewCount,
        youtuberImage,
        youtuberName,
    } = props

    return (
        <Container>
            <Thumbnail src={image} />
            <LengthBox>
                {length}
            </LengthBox>
            <Description>
                <ProfileImage src={youtuberImage} />
                <HorizontalSpacing />
                <div>
                    <Title>{title}</Title>
                    <Text>{youtuberName}</Text>
                    <Text>조회수 {viewCount}만회</Text>
                </div>
            </Description>
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
})

const Thumbnail = styled.img({
    width: 384,
    height: 216,
})

const Description = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 10,
})

const ProfileImage = styled.img({
    width: 40,
    height: 40,
    borderRadius: 20,
})

const Title = styled.div({
    fontWeight: 'bold',
    fontSize: 16,
})

const HorizontalSpacing = styled.div({
    width: 8,
})

const Text = styled.div({
    fontSize: 13,
})

const LengthBox = styled.div({
    backgroundColor: 'black',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 4,
    position: 'absolute',
    top: 180,
    left: 340,
})
