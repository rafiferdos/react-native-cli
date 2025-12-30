export interface CounterButtonProps {
    variant: 'increment' | 'decrement' | 'reset';
    onPress: () => void;
    disabled?: boolean;
}

export interface CounterDisplayProps {
    count: number;
}

export interface HeaderProps {
    title: string;
    subtitle?: string;
}
