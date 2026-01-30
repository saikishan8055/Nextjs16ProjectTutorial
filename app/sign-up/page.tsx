"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { useState } from "react";

export default function signUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault()

    setError("")
    setLoading(true)
    try{

    }catch(error){
        setError("An unexpected Error happened")
 }finally{
    setLoading(false)
 }




  }
  return (
    <div className="flex min-h-[calc(100hv-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-black text-2xl font-bold">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-1">
          <CardContent>
            <div className="text-gray-700">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter the Name"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="text-gray-700">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter the E-mail"
                required
                className="border-gray-300 focus:border-primary focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-gray-700">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter the Password"
                required
                minLength={8}
                className="border-gray-300 focus:border-primary focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>    
          <CardFooter className="flex flex-col space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Sign Up
            </Button>
            <p>
              Already have the account?{" "}
              {
                <Link
                  href="/sign-in"
                  className=" font-medium text-primary hover:underline"
                >
                  Sign In
                </Link>
              }
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
