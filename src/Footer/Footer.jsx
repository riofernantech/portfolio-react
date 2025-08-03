export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <footer>
            <small>© {year} Rio Fernando</small>
            <address>riosuryafernando12@gmail.com</address>
        </footer>
    )
}