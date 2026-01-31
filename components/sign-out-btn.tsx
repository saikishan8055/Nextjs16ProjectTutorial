
"use client"

import { signOut } from "@/lib/auth/auth-client"
import { DropdownMenuItem } from "./ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { error } from "console"


export default function SignOutButton(){
    const router = useRouter()
    return (
        <DropdownMenuItem onClick={async()=>{ 
          const result = await  signOut();
          if(result.data){
            router.push('/sign-in')
            }else{
                alert("Error sign out")
            }


        }} className="text-primary">
              Log Out
            </DropdownMenuItem>
    )
}