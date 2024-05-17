"use client";

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image';
import { useState } from "react";


const NavbarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Category",
    "Products",
    "Flash Sale",
    "About Us",
    "Contact Us",
  ];

    return (
        <Navbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>
    
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
            <Image
              width={35}
              height={35}
              src="https://i.ibb.co/vJJ36B3/grocery-logo.jpg"
              alt="logo"
              />
              <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarBrand>
            <Image
              width={35}
              height={35}
              src="https://i.ibb.co/vJJ36B3/grocery-logo.jpg"
              alt="logo"
              />
              <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="end" className="hidden sm:flex gap-4">
          <NavbarItem>
              <Link color="foreground" href="#">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Categories
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                products
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Flash Sale
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                About Us
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
    );
};

export default NavbarPage;