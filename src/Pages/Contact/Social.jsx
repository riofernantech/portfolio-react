import SocialBadge from './SocialBadge';
import { socialItems } from './socialData';

export default function Social() {
    return (
        <>
            <h3>Social Media</h3>
            <p> if you want to find me on social media, i have include some links to social media platform i used below.</p>

            <div className="container-link">
                {socialItems.map(({ label, href, Icon }) => (
                    <SocialBadge key={label} label={label} href={href} Icon={Icon} />
                ))}
            </div>
        </>
    )
}