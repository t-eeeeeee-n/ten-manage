import {FaFacebook, FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";
import {IconType} from "react-icons";

const SnsLink = () => {
    const snsIcons: {icon: IconType, mt: number}[] = [
        { icon: FaFacebook, mt: 0 },
        { icon: FaSquareXTwitter, mt: 1 },
        { icon: FaSquareInstagram, mt: 1 },
    ];

    return (
        <div className={"flex gap-0.5"}>
            {snsIcons.map(({ icon: Icon, mt }, index) => (
                <div key={index} className={`flex justify-center cursor-pointer mt-[${mt}px] `}>
                    <Icon />
                </div>
            ))}
        </div>
    )
}
export default SnsLink;