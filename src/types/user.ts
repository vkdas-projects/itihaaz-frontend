export type User  = {
    data: {
        email: string
    } | null;
    isLoading: boolean;
    error?: null | unknown;
    createUserSubscriptionFunction: (email : string) => void;
}