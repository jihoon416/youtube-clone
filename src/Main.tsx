import styled from "@emotion/styled"
import { collection } from "@firebase/firestore";
import { db } from "./service/FirebaseService";
import { Video } from "./Video"
import { useCollection } from 'react-firebase-hooks/firestore';

export const Main = () => {

    const [value, loading, error] = useCollection(collection(db, 'videos'));

    const docs = value?.docs

    const components = docs?.map((doc) => {
        return <>
            <HorizontalSpacing />
            <Video key={doc.id} {...doc.data() as any} />
        </>
    })

    return (
        <Container>
            <VerticalSpacing />
            <Row>
                {components}
            </Row>
        </Container>
    )
}

const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 60,
    marginLeft: 200,
})

const Row = styled.div({
    display: 'flex',
    flexDirection: 'row',
})

const HorizontalSpacing = styled.div({
    width: 16,
})

const VerticalSpacing = styled.div({
    height: 32,
})