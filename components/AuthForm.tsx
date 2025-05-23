import { View, TextInput, Text } from "react-native";
import { Button } from "./Button";

type AuthFormProps = {
  type: 'signin' | 'signup';
  onSubmit: () => void;
  isLoading: boolean;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  name?: string;
  setName?: (name: string) => void;
};

export function AuthForm({   type,   onSubmit,   isLoading,   email,   setEmail,   password,   setPassword,  name,  setName }: AuthFormProps) {
  return (
    <View className="space-y-4">
      {type === 'signup' && (
        <View>
          <Text className="text-gray-700 mb-2">Name</Text>
          <TextInput
            className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
        </View>
      )}

      <View>
        <Text className="text-gray-700 mb-2">Email</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View>
        <Text className="text-gray-700 mb-2">Password</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50"
          placeholder={type === 'signin' ? "Enter your password" : "Create a password"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Button title={isLoading 
          ? (type === 'signin' ? 'Signing in...' : 'Creating account...') 
          : (type === 'signin' ? 'Sign In' : 'Create Account')}
        onPress={onSubmit}
        disabled={isLoading}
      />
    </View>
  );
} 