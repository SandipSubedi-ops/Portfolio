'use client'

import { useState } from "react"
import navigationMobile from "../../lib/navBarMobile"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger,SheetTitle } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { AlignJustify } from "lucide-react"

export default function MobileNavigator() {
  const [opened, setOpened] = useState<boolean>(false)

  const router = useRouter()

  return (
    <Sheet open={opened} onOpenChange={(open) => setOpened(open)}>
      <SheetTrigger asChild className="block md:hidden">
        <Button
          variant="outline"
          aria-label="Toggle Navbar"
        >
         <AlignJustify className="" />
          <span className="sr-only">Toggle Navbar</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full h-full border-0">
        
  <SheetTitle>Menu</SheetTitle> 
        <div className="py-20 w-full flex flex-col absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 gap-10 items-center">
          {navigationMobile.map((navLink) => (
            <div
              // href={navLink.href}
              className="dark:text-white hover:dark:text-accentColor"
              key={navLink.title}
              onClick={(e) => {
                e.preventDefault()
                router.push(navLink.href)

                setOpened(false)
              }}
            >
              {navLink.title}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
