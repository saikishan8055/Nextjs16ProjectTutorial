"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"



export default function signIn(){


    return
    <div className="flex min-h-[calc(100hv-4rem)] items-center justify-center bg-white p-4">
   
<Card className="w-full max-w-md border-gray-200 shadow-lg ">
<CardHeader className="space-y-1">
    <CardTitle className="text-black text-2xl font-bold">Sign In</CardTitle>
        <CardDescription className="text-gray-600">
Please sign in        </CardDescription>
    
</CardHeader>
<form className="space-y-1">
    <CardContent>
      
         <div className="text-gray-700">
            <Label htmlFor="email">Email</Label>
            <Input id = "email" type="email" placeholder="Enter the E-mail" required
                            className="border-gray-300 focus:border-primary focus:ring-primary"

/>
        </div>
         <div className="text-gray-700">
            <Label htmlFor="password">Password</Label>
            <Input id = "password" type="password" placeholder="Enter the Password" required 
            minLength={8}
                            className="border-gray-300 focus:border-primary focus:ring-primary"
/>
        </div>
    </CardContent>
    <CardFooter className="flex flex-col space-y-4">
        <Button type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        >Sign In</Button>
        <p>Don't have an acoount  { <Link href='/sign-up' className=" font-medium text-primary hover:underline">Sign Up</Link>}</p>
    </CardFooter>
</form>

</Card>

    </div>

}