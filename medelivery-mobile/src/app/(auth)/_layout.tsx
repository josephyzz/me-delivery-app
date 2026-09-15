import { Stack } from 'expo-router'


export default function StackPage() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
      />
      <Stack.Screen
        name="profile"
      />
    </Stack>
  )
}
