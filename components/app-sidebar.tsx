"use client";
import {
  Home,
  Heart,
  List,
  UserPen,
  LogOut,
  ShirtIcon,
  Camera,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";

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
    title: "Upload",
    url: "/upload",
    icon: Camera,
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
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild={!item.onClick}
                    onClick={item.onClick}
                  >
                    {item.onClick ? (
                      <div className="flex items-center gap-2 cursor-pointer">
                        <item.icon />
                        <span>{item.title}</span>
                      </div>
                    ) : (
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
