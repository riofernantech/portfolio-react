export default function Avatar({onSmash}){
    return (
            <div className="navbar-profile" onClick={onSmash}>
                <img src="/images/profile-photo.jpg" alt="" className="profile" />
                <div className="indicator" />
            </div>
    )
}