import { Calendar, Home, Shirt, Heart ,Search,List ,UserPen,CircleUserIcon,LogOut, Settings, ShirtIcon, User } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { signOut } from "next-auth/react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Ai Outfits",
    url: "/combinations",
    icon: ShirtIcon,
  },
  {
    title: "favourites",
    url: "/favorites",
    icon: Heart,
  },
  {
    title: "wardrobe",
    url: "/wardrobe",
    icon: List,
  },
  {
    title: "Account",
    url: "/account",
    icon: UserPen,
  },
  {
    title: "Logout",
    onClick: () => signOut({ callbackUrl: "/" }),
    icon: LogOut,
  },
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}