export default function AvatarPopUp({onSmash}) {
    return (
        <div id="popup" className="popup">
            <div className="popup-content">
                <span className="close-btn" onClick={onSmash}>×</span>
                <img src="./src/assets/images/profile-photo.jpg" alt="Foto Saya" />
            </div>
        </div>
    );
}