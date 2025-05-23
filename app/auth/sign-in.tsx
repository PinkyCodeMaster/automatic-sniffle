import { useState, useEffect } from "react"; 
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { authClient } from "../../lib/auth-client";
import { router, Link } from "expo-router";
import { AuthForm } from "../../components/AuthForm";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [session, setSession] = useState(null);

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await authClient.getSession();
            if (data?.session) {
                router.replace('/(app)');
            }
        };
        checkSession();
    }, []);
 
    const handleLogin = async () => {
        try {
            setIsLoading(true);
            setError("");
            const response = await authClient.signIn.email({
                email,
                password,
            });
            if (response.error) throw response.error;
            router.replace('/(app)');
        } catch (error) {
            console.error('Sign in error:', error);
            setError("Invalid email or password");
        } finally {
            setIsLoading(false);
        }
    };
 
    return (
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            keyboardShouldPersistTaps="handled"
        >
            <View className="flex-1 justify-center items-center p-4 bg-white">
                <View className="w-full max-w-sm">
                    {/* Logo placeholder */}
                    <View className="items-center mb-8">
                        <View className="w-20 h-20 bg-indigo-700 rounded-full mb-4 items-center justify-center">
                            <Text className="text-white text-xl font-bold">LOGO</Text>
                        </View>
                        <Text className="text-3xl font-bold mb-1 text-center">Welcome Back</Text>
                        <Text className="text-gray-600 mb-8 text-center">
                            Sign in to continue to your account
                        </Text>
                    </View>

                    {error && (
                        <View className="bg-red-100 p-3 rounded-md mb-4">
                            <Text className="text-red-700">{error}</Text>
                        </View>
                    )}

                    <AuthForm
                        type="signin"
                        onSubmit={handleLogin}
                        isLoading={isLoading}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                    />

                    <View className="mt-6 flex-row justify-center">
                        <Text className="text-gray-600">Don't have an account? </Text>
                        <Link href="/auth/sign-up" asChild>
                            <TouchableOpacity>
                                <Text className="text-indigo-700 font-bold">Sign Up</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}