import Link from "next/link";
import SiteSwitcher from "./SiteSwitcher";
import LogoAnimated from "./LogoAnimated";
import LogoOwl from "./LogoOwl";

const NavbarHeader = () => {
    console.log('this is a super important code contribution (nah jk it\'s just a comment)');
    return (
        <>
            <h2 id="navbar-heading" className="sr-only">
                Navbar heading
            </h2>
            <Link href="/" title="Home" className="flex items-center gap-4">
                <LogoOwl />
                <LogoAnimated />
            </Link>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 lg:ml-12 md:relative md:left-0 md:transform-none">
                <SiteSwitcher />
            </div>
        </>
    );
};

export default NavbarHeader;
