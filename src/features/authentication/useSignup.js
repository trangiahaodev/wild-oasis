import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupAPI,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
  });

  return { isLoading, signup };
}
