import { Button, Input, XStack, YStack } from 'tamagui'
import React from 'react'

interface FormProps {
    size?: '$2' | '$3' | '$4' | '$5'
}

const Form: React.FC<FormProps> = ({ size = '$4' }) => {
    return (
        <YStack width={200} minHeight={250} overflow="hidden" gap={2} margin={3} padding={2}>
            <XStack alignItems="center" gap={2}>
                <Input flex={1} size={size} placeholder={`Enter your name`} />
                <Button size={size} onPress={() => console.log('Submitted!')}>Submit</Button>
            </XStack>
        </YStack>
    )
}

export default Form