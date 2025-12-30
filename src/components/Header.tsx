import React, { memo } from 'react';
import { YStack, Text } from 'tamagui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = memo(({ title, subtitle }) => {
    const insets = useSafeAreaInsets();

    return (
        <YStack
            backgroundColor="$purple9"
            paddingTop={insets.top + 16}
            paddingBottom="$4"
            paddingHorizontal="$4"
            elevation={4}
        >
            <Text fontSize="$7" fontWeight="bold" color="white">
                {title}
            </Text>
            {subtitle && (
                <Text fontSize="$3" color="$purple3" marginTop="$1">
                    {subtitle}
                </Text>
            )}
        </YStack>
    );
});

Header.displayName = 'Header';
