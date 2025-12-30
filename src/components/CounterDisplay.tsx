import React, { memo } from 'react';
import { YStack, Text } from 'tamagui';
import Animated, {
    useAnimatedStyle,
    withSpring,
    useSharedValue,
    withSequence,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import type { CounterDisplayProps } from '../types';

const AnimatedYStack = Animated.createAnimatedComponent(YStack);

export const CounterDisplay: React.FC<CounterDisplayProps> = memo(({ count }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        scale.value = withSequence(
            withSpring(1.15, { damping: 8 }),
            withSpring(1, { damping: 10 })
        );
    }, [count, scale]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const isNegative = count < 0;

    return (
        <YStack
            backgroundColor="$gray3"
            borderRadius="$6"
            padding="$6"
            alignItems="center"
            elevation={4}
            marginVertical="$4"
        >
            <Text
                fontSize="$3"
                color="$gray11"
                textTransform="uppercase"
                letterSpacing={2}
            >
                Current Count
            </Text>

            <AnimatedYStack style={animatedStyle} marginVertical="$4">
                <Text
                    fontSize={80}
                    fontWeight="bold"
                    color={isNegative ? '$red10' : '$purple10'}
                >
                    {count}
                </Text>
            </AnimatedYStack>

            <Text fontSize="$2" color="$gray11" textAlign="center">
                {count === 0
                    ? 'Tap the buttons below to start!'
                    : count > 0
                        ? `Incremented ${count} time${count > 1 ? 's' : ''}`
                        : `${Math.abs(count)} below zero`}
            </Text>
        </YStack>
    );
});

CounterDisplay.displayName = 'CounterDisplay';
