import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src='/Brand-logo.svg'
                alt="logo site"
                width={116}
                height={32}
            />
        </Link>
    )
}