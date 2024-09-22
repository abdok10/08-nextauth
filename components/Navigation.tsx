import Link from "next/link";

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { getSession } from "@lib/getSession";
import { signOut } from "@auth";

export async function Navigation() {
  const session = await getSession();
  const user = session?.user;

  return (
    <nav className="bg-white shadow-md fixed top-5 left-5 right-5 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-900">SaaSLogo</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/admin/dashboard"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/localisation"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Localisation
            </Link>
            {user ? (
              <form action={async () => {
                "use server"
                await signOut()
              }}>
                <Button>Logout</Button>
              </form>
            ) : (

              <Link href="/register">
              <Button>Register</Button>
            </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
