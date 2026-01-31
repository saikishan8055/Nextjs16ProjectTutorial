"use client"

import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { getSession} from "@/lib/auth/auth";

import { DropdownMenu, DropdownMenuContent,DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "./ui/avatar";
import SignOutButton from "./sign-out-btn";
import { useSession } from "@/lib/auth/auth-client";


export default  function Navbar() {
  const {data:session} = useSession()
  return (
    <nav className="border-b border-gray-400 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
    
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-primary">
          <Briefcase />
          Job Tracker
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
            <Link href='/dashboard'>
            <Button variant="ghost" className=" cursor-pointer text-gary-700 hover:text-black">
              DashBoard</Button>
            </Link>
             <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <Avatar>
                <AvatarFallback className="bg-primary text-white">
                  {session.user.name[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{session.user.name}</p>
                <p className="leading-none text-xs text-muted-foreground">{session.user.email}</p>
              </div>
            </DropdownMenuLabel>
            <SignOutButton/>
          </DropdownMenuContent>
         </DropdownMenu>
            </>
            
          ):(
         <>
        
          <Link href="sign-in">
            <Button variant="ghost" className="text-gray-700 hover:text-black">
              Login
            </Button>
          </Link>
          <Link href="sign-up">
            <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
          </Link>
          </>)}
        </div>
      </div>
    </nav>
  );
}
