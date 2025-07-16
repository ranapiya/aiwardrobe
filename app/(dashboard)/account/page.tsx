"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, User, ShieldCheck } from "lucide-react";
import React from "react";

const AccountPage = () => {
  return (
    <div className="min-h-screen px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">My Account</h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="profile" className="flex items-center gap-2 justify-center">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2 justify-center">
            <Settings className="w-4 h-4" />
            Settings
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2 justify-center">
            <ShieldCheck className="w-4 h-4" />
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <div className="rounded-xl border p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
            {/* Replace this with your actual profile update form */}
            <p className="text-sm text-muted-foreground">Here you will allow users to update their name, photo, bio, etc.</p>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="rounded-xl border p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">App Settings</h2>
            {/* Replace with theme toggles, notification prefs, etc. */}
            <p className="text-sm text-muted-foreground">Settings like dark mode, notifications, etc., go here.</p>
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <div className="rounded-xl border p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Security</h2>
            {/* Add password reset, 2FA toggle, etc. */}
            <p className="text-sm text-muted-foreground">Security preferences like password reset, 2FA, etc.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountPage;
