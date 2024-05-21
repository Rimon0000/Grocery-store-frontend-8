"use client";

import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from 'next/image';
import { useEffect, useState } from "react";
import NextLink from 'next/link';



const NavbarPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  
  

    return (
        <Navbar
          isBordered 
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
            <NavbarItem isActive={currentPath === "/"}>
                <Link href="/" color="foreground">Home</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/categories"}>
                <Link href="/categories" color="foreground">Categories</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/fish"}>
                <Link href="/fish" color="foreground">Products</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/flash-sale"}>
                <Link href="/flash-sale" color="foreground">Flash Sale</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/dashboard/all-products"}>
                <Link href="/dashboard/all-products" color="foreground">Dashboard</Link>
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
            <NavbarItem isActive={currentPath === "/"}>
                <Link href="/" color="foreground">Home</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/categories"}>
                <Link href="/categories" color="foreground">Categories</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/fish"}>
                <Link href="/fish" color="foreground">Products</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/flash-sale"}>
                <Link href="/flash-sale" color="foreground">Flash Sale</Link>
            </NavbarItem>

            <NavbarItem isActive={currentPath === "/dashboard/all-products"}>
                <Link href="/dashboard/all-products" color="foreground">Dashboard</Link>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
    );
};

export default NavbarPage;