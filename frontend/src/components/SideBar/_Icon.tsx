import { ReactNode } from 'react';

type IconProps = {
    icon: ReactNode; // ReactNodeタイプはReact要素を含むことができます
};

const _Icon = ({ icon }: IconProps) => {
    return (
        <span className="size-5 mr-2">
            {icon}
        </span>
    )
}

export default _Icon;