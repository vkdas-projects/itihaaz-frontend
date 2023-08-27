export type Auth = {
  data: {
    user: string | null
  } | null;
  isLoading: boolean;
  error?: null | unknown;
  login: (data: { email: string; password: string }) => void;
};
