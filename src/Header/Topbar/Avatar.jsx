export default function Avatar(){
    return (
            <div className="navbar-profile" onclick="showPopup()">
                <img src="./src/assets/images/profile-photo.jpg" alt="" className="profile" />
                <div className="indicator" />
            </div>
    )
}