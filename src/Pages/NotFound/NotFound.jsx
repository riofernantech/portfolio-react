import { NavLink } from "react-router";
import { useDocumentTitle } from '../../Hooks/useDocumentTitle';

export default function NotFound(){
    useDocumentTitle('404 Not Found | RioFernando');

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <div></div>
                    <h1>404</h1>
                </div>
                <h2>Konten Tidak Tersedia</h2>
                <p>Pesan ini tampil karena kesalahan url atau path yang dituju </p>
                <NavLink to="/">
                    Kembali
                </NavLink>
            </div>
        </div>
    )
}