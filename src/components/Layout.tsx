import { UserButton, useUser } from "@clerk/clerk-react";
import { Button, Navbar } from "flowbite-react";

export function NavigationBar() {
  const { isSignedIn, user } = useUser();
  return (
    <Navbar fluid rounded className="fixed w-full top-0 border-2">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="https://flowbite-react.com/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        {isSignedIn ? (
          <>
            <UserButton />
            {user.fullName}
            <Navbar.Toggle />
          </>
        ) : (
          <>
            <Button>Get started</Button>
            <Navbar.Toggle />
          </>
        )}
      </div>
    </Navbar>
  );
}
