import { useParams } from 'react-router';

export default function Show(){

    let { id } = useParams();
    return(
        <>
        <h2>Show pages</h2>
        <p>Your are looking at book with id: {id}</p>
        </>
    )
}