import Table from './Table.jsx';
import Social from './Social.jsx';
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';

export default function Contact(){
    useDocumentTitle('Contact | RioFernando');
    
    return (
        <>
            <Table/>
            <Social/>
        </>
    )
}