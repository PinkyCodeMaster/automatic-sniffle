import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { authClient } from "../../lib/auth-client";
import Button from "../../components/Button";

export default function ProfileScreen() {
  const { data: session } = authClient.useSession();

  const name = session?.user?.name ?? "Anonymous";
  const email = session?.user?.email ?? "No email provided";
  const avatar = session?.user?.image ?? null;

  const logout = async () => {
    await authClient.signOut();
  }

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="items-center p-6">
        <View className="mb-6 items-center">
          {avatar ? (
            <Image source={{ uri: avatar }} className="w-28 h-28 rounded-full" />
          ) : (
            <View className="w-28 h-28 rounded-full bg-indigo-100 items-center justify-center">
              <Text className="text-3xl font-semibold text-indigo-700">
                {name?.charAt(0) || "U"}
              </Text>
            </View>
          )}
          <Text className="text-2xl font-bold mt-4">{name}</Text>
          <Text className="text-gray-500">{email}</Text>
        </View>

        <View className="w-full bg-white rounded-xl shadow-sm mb-4">
          <View className="p-4 border-b border-gray-100">
            <Text className="text-lg font-semibold mb-2">Profile Information</Text>
            <View className="space-y-2">
              <View>
                <Text className="text-gray-500 text-sm">Name</Text>
                <Text className="font-medium">{name}</Text>
              </View>
              <View>
                <Text className="text-gray-500 text-sm">Email</Text>
                <Text className="font-medium">{email}</Text>
              </View>
              <View>
                <Text className="text-gray-500 text-sm">User ID</Text>
                <Text className="font-medium">{session?.user?.id ?? "Not available"}</Text>
              </View>
              
            </View>
          </View>
        </View>

        <Button
          title="Edit Profile"
          onPress={() => alert("Edit profile functionality would go here")}
        />
      </View>
    </ScrollView>
  );
}
