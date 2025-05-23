import { Alert, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-y-2">
      <View className="items-center">
        <Text className="text-4xl">Welcome to NativeWind!</Text>
        <Text className="text-xl">Style your app with</Text>
        <Text className="text-3xl bg-yellow-100 font-bold underline">Tailwind CSS!</Text>
        <Link href="/auth/sign-in">Sign In</Link>
      </View>
    </View>
  );
}
