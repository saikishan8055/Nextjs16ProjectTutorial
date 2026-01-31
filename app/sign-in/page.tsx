// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@radix-ui/react-label"
// import Link from "next/link"



// export default function signIn(){


//     return
//     <div className="flex min-h-[calc(100hv-4rem)] items-center justify-center bg-white p-4">
   
// <Card className="w-full max-w-md border-gray-200 shadow-lg ">
// <CardHeader className="space-y-1">
//     <CardTitle className="text-black text-2xl font-bold">Sign In</CardTitle>
//         <CardDescription className="text-gray-600">
// Please sign in        </CardDescription>
    
// </CardHeader>
// <form className="space-y-1">
//     <CardContent>
      
//          <div className="text-gray-700">
//             <Label htmlFor="email">Email</Label>
//             <Input id = "email" type="email" placeholder="Enter the E-mail" required
//                             className="border-gray-300 focus:border-primary focus:ring-primary"

// />
//         </div>
//          <div className="text-gray-700">
//             <Label htmlFor="password">Password</Label>
//             <Input id = "password" type="password" placeholder="Enter the Password" required 
//             minLength={8}
//                             className="border-gray-300 focus:border-primary focus:ring-primary"
// />
//         </div>
//     </CardContent>
//     <CardFooter className="flex flex-col space-y-4">
//         <Button type="submit"
//         className="w-full bg-primary hover:bg-primary/90"
//         >Sign In</Button>
//         <p>Don't have an acoount  { <Link href='/sign-up' className=" font-medium text-primary hover:underline">Sign Up</Link>}</p>
//     </CardFooter>
// </form>

// </Card>

//     </div>

// }
"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "@/lib/auth/auth-client"

export default function SignIn() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
  
    const router = useRouter();
  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      setError(null);
      setLoading(true);
  
      try {
        const result = await signIn.email({
          email,
          password,
        });
  
        if (result?.error) {
          setError(result.error.message ?? "Failed to sign in");
          return;
        }
  
        // NOTE: This assumes email verification is disabled
        router.push("/dashboard");
      } catch (err) {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    }
  
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-black text-2xl font-bold">
            Sign In
          </CardTitle>
          <CardDescription className="text-gray-600">
            Please sign in
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} className="space-y-1">
          <CardContent>
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive ">{error}</div>
            )}
            <div className="text-gray-700">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter the E-mail"
                value={email}
               onChange={(e)=> setEmail(e.target.value)}
                required
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
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90"
            disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <p>
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-primary hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
