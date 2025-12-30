import React, { memo } from 'react';
import { Button, Text } from 'tamagui';
import type { CounterButtonProps } from '../types';

const BUTTON_CONFIG = {
    increment: {
        icon: '+',
        label: 'Increment',
        backgroundColor: '$purple9',
        pressStyle: { backgroundColor: '$purple10' },
    },
    decrement: {
        icon: '−',
        label: 'Decrement',
        backgroundColor: '$green9',
        pressStyle: { backgroundColor: '$green10' },
    },
    reset: {
        icon: '↺',
        label: 'Reset',
        backgroundColor: '$gray6',
        pressStyle: { backgroundColor: '$gray7' },
    },
} as const;

export const CounterButton: React.FC<CounterButtonProps> = memo(
    ({ variant, onPress, disabled = false }) => {
        const config = BUTTON_CONFIG[variant];

        return (
            <Button
                size="$6"
                circular
                backgroundColor={config.backgroundColor}
                pressStyle={config.pressStyle}
                onPress={onPress}
                disabled={disabled}
                opacity={disabled ? 0.5 : 1}
                elevation={3}
            >
                <Text fontSize={28} fontWeight="bold" color="white">
                    {config.icon}
                </Text>
            </Button>
        );
    }
);

CounterButton.displayName = 'CounterButton';
