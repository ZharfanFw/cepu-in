import Link from "next/link"

interface ButtonData {
    href: string;
    label: string;
}

export default function Button(buttonData: ButtonData) {
    return (
        <Link href={buttonData.href} className="flex bg-(--color-normal) hover:bg-(--color-normal-hover) text-white px-4 py-2 rounded-4xl transition-all duration-150 justify-center items-center">{buttonData.label}</Link>
    )
}