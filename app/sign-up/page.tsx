// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@radix-ui/react-label";
// import Link from "next/link";
// import { useState } from "react";
// import { signUp } from "@/lib/auth/auth-client";
// import { useRouter } from "next/navigation";

// export default function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error,setError] = useState('')
//   const [loading,setLoading] = useState(false)
//   const router = useRouter()

//   async function handleSubmit(e:React.FormEvent){
//     e.preventDefault()

//     setError("")
//     setLoading(true)
//     try{
//        const result =  await signUp.email({
//             name,email,password
//         })
//     if(result.error){
//         setError(result.error.message ?? "Fail to sign up")

//     }else{
//         router.push('/dashboard')
//     }

        

//     }catch(error){
//         setError("An unexpected Error happened")
//  }finally{
//     setLoading(false)
//  }




//   }
//   return (
//     <div className="flex min-h-[calc(100hv-4rem)] items-center justify-center bg-white p-4">
//       <Card className="w-full max-w-md border-gray-200 shadow-lg ">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-black text-2xl font-bold">
//             Sign Up
//           </CardTitle>
//           <CardDescription className="text-gray-600">
//             Create an account to start tracking your job applications
//           </CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit} className="space-y-1">
//           <CardContent>
//             {error && (
//                 <div className="rounded-md bg-destructive/15 p-3 text-destructive">{error}</div>
//             )}
//             <div className="text-gray-700">
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 type="text"
//                 placeholder="Enter the Name"
//                 required
//                 className="border-gray-300 focus:border-primary focus:ring-primary"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="text-gray-700">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter the E-mail"
//                 required
//                 className="border-gray-300 focus:border-primary focus:ring-primary"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="text-gray-700">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter the Password"
//                 required
//                 minLength={8}
//                 className="border-gray-300 focus:border-primary focus:ring-primary"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </CardContent>    
//           <CardFooter className="flex flex-col space-y-4">
//             <Button
//               type="submit"
//               className="w-full bg-primary hover:bg-primary/90"
//               disabled={loading}

//             >
//               { loading? "creating an account... ":"Sign Up"}
//             </Button>
//             <p>
//               Already have the account?{" "}
//               {
//                 <Link
//                   href="/sign-in"
//                   className=" font-medium text-primary hover:underline"
//                 >
//                   Sign In
//                 </Link>
//               }
//             </p>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }
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
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
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
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error.message ?? "Failed to sign up");
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
          <CardTitle className="text-2xl font-bold text-black">
            Sign Up
          </CardTitle>
          <CardDescription className="text-gray-600">
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} className="space-y-1">
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            <div className="text-gray-700">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="text-gray-700">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="text-gray-700">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </Button>

            <p className="text-sm">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
