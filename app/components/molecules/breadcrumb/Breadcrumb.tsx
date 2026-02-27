import clsx from "clsx";
import Text from "@/app/components/atoms/text/Text";
import "./breadcrumb.scss";

interface BreadcrumbProps {
    paths: string[];
    onClick?: (index: number, path: string) => void;
}

export default function Breadcrumb({ paths, onClick }: BreadcrumbProps) {
    return (
        <nav className="breadcrumb">
            {paths.map((path, index) => (
                <div key={index} className="breadcrumb-item">
                    <Text
                        as="span"
                        size="sm"
                        weight="medium"
                        color="primary"
                        className={clsx({ clickable: !!onClick })}
                        onClick={() => onClick?.(index, path)}
                    >
                        {path}
                    </Text>
                    {index < paths.length - 1 && (
                        <Text as="span" size="sm" color="primary" className="breadcrumb-separator">
                            &gt;
                        </Text>
                    )}
                </div>
            ))}
        </nav>
    );
}
