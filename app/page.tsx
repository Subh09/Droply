// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// import { Button } from "@heroui/button";
// import { SignedIn, SignedOut } from "@clerk/nextjs";
// import Link from "next/link";
// import { Card, CardBody } from "@heroui/card";
// import {
//   CloudUpload,
//   Shield,
//   Folder,
//   Image as ImageIcon,
//   ArrowRight,
// } from "lucide-react";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (

    
//     <div className="min-h-screen flex flex-col bg-default-50">
//       {/* Use the unified Navbar component */}
//       <Navbar />

//       {/* Main content */}
//       <main className="flex-1">
//         {/* Hero section */}
//         <section className="py-12 md:py-20 px-4 md:px-6">
//           <div className="container mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//               <div className="space-y-6 text-center lg:text-left">
//                 <div>
//                   <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-default-900 leading-tight">
//                     Store your <span className="text-primary">images</span> with
//                     ease
//                   </h1>
//                   <p className="text-lg md:text-xl text-default-600">
//                     Simple. Secure. Fast.
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
//                   <SignedOut>
//                     <Link href="/sign-up">
//                       <Button size="lg" variant="solid" color="primary">
//                         Get Started
//                       </Button>
//                     </Link>
//                     <Link href="/sign-in">
//                       <Button size="lg" variant="flat" color="primary">
//                         Sign In
//                       </Button>
//                     </Link>
//                   </SignedOut>
//                   <SignedIn>
//                     <Link href="/dashboard">
//                       <Button
//                         size="lg"
//                         variant="solid"
//                         color="primary"
//                         endContent={<ArrowRight className="h-4 w-4" />}
//                       >
//                         Go to Dashboard
//                       </Button>
//                     </Link>
//                   </SignedIn>
//                 </div>
//               </div>

//               <div className="flex justify-center order-first lg:order-last">
//                 <div className="relative w-64 h-64 md:w-80 md:h-80">
//                   <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <ImageIcon className="h-24 md:h-32 w-24 md:w-32 text-primary/70" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features section */}
//         <section className="py-12 md:py-16 px-4 md:px-6 bg-default-50">
//           <div className="container mx-auto">
//             <div className="text-center mb-8 md:mb-12">
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 text-default-900">
//                 What You Get
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//               <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow">
//                 <CardBody className="p-6 text-center">
//                   <CloudUpload className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
//                   <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
//                     Quick Uploads
//                   </h3>
//                   <p className="text-default-600">Drag, drop, done.</p>
//                 </CardBody>
//               </Card>

//               <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow">
//                 <CardBody className="p-6 text-center">
//                   <Folder className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
//                   <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
//                     Smart Organization
//                   </h3>
//                   <p className="text-default-600">
//                     Keep it tidy, find it fast.
//                   </p>
//                 </CardBody>
//               </Card>

//               <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-full">
//                 <CardBody className="p-6 text-center">
//                   <Shield className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
//                   <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
//                     Locked Down
//                   </h3>
//                   <p className="text-default-600">
//                     Your images, your eyes only.
//                   </p>
//                 </CardBody>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* CTA section */}
//         <section className="py-12 md:py-20 px-4 md:px-6 bg-default-50">
//           <div className="container mx-auto text-center">
//             <h2 className="text-2xl md:text-3xl font-bold mb-4 text-default-900">
//               Ready?
//             </h2>
//             <SignedOut>
//               <div className="flex flex-wrap justify-center gap-4 mt-8">
//                 <Link href="/sign-up">
//                   <Button
//                     size="lg"
//                     variant="solid"
//                     color="primary"
//                     endContent={<ArrowRight className="h-4 w-4" />}
//                   >
//                     Let's Go
//                   </Button>
//                 </Link>
//               </div>
//             </SignedOut>
//             <SignedIn>
//               <Link href="/dashboard">
//                 <Button
//                   size="lg"
//                   variant="solid"
//                   color="primary"
//                   endContent={<ArrowRight className="h-4 w-4" />}
//                 >
//                   Dashboard
//                 </Button>
//               </Link>
//             </SignedIn>
//           </div>
//         </section>
//       </main>

//       {/* Simple footer */}
//       <footer className="bg-default-50 border-t border-default-200 py-4 md:py-6">
//         <div className="container mx-auto px-4 md:px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center gap-2 mb-4 md:mb-0">
//               <CloudUpload className="h-5 w-5 text-primary" />
//               <h2 className="text-lg font-bold">Droply</h2>
//             </div>
//             <p className="text-default-500 text-sm">
//               &copy; {new Date().getFullYear()} Droply
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
    
//   );
//   }



import { Button } from "@heroui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Card, CardBody } from "@heroui/card";
import {
  CloudUpload,
  Shield,
  Folder,
  Image as ImageIcon,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-default-50">
      {/* Navbar */}
      <Navbar />

      {/* ✅ Tailwind debug line */}
      <div className="bg-red-500 text-white p-4 text-center">
        If you see a red background with white text, Tailwind colors are working!
      </div>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-20 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-default-900 leading-tight">
                    Store your <span className="text-primary">images</span> with ease
                  </h1>
                  <p className="text-lg md:text-xl text-default-600">
                    Simple. Secure. Fast.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                  <SignedOut>
                    <Link href="/sign-up">
                      <Button size="lg" variant="solid" color="primary">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button size="lg" variant="flat" color="primary">
                        Sign In
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        variant="solid"
                        color="primary"
                        endContent={<ArrowRight className="h-4 w-4" />}
                      >
                        Go to Dashboard
                      </Button>
                    </Link>
                  </SignedIn>
                </div>
              </div>

              <div className="flex justify-center order-first lg:order-last">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="h-24 md:h-32 w-24 md:w-32 text-primary/70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-default-50">
          <div className="container mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-default-900">
                What You Get
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow">
                <CardBody className="p-6 text-center">
                  <CloudUpload className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
                    Quick Uploads
                  </h3>
                  <p className="text-default-600">Drag, drop, done.</p>
                </CardBody>
              </Card>

              <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow">
                <CardBody className="p-6 text-center">
                  <Folder className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
                    Smart Organization
                  </h3>
                  <p className="text-default-600">Keep it tidy, find it fast.</p>
                </CardBody>
              </Card>

              <Card className="border border-default-200 bg-default-50 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 max-w-md sm:max-w-full">
                <CardBody className="p-6 text-center">
                  <Shield className="h-10 md:h-12 w-10 md:w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-default-900">
                    Locked Down
                  </h3>
                  <p className="text-default-600">Your images, your eyes only.</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-12 md:py-20 px-4 md:px-6 bg-default-50">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-default-900">
              Ready?
            </h2>
            <SignedOut>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/sign-up">
                  <Button
                    size="lg"
                    variant="solid"
                    color="primary"
                    endContent={<ArrowRight className="h-4 w-4" />}
                  >
                    Let's Go
                  </Button>
                </Link>
              </div>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="solid"
                  color="primary"
                  endContent={<ArrowRight className="h-4 w-4" />}
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-default-50 border-t border-default-200 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <CloudUpload className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold">Droply</h2>
            </div>
            <p className="text-default-500 text-sm">
              &copy; {new Date().getFullYear()} Droply
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
