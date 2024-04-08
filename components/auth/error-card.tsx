import { TriangleAlert } from "lucide-react";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      title="Auth Error"
      description="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full items-center flex justify-center">
        <TriangleAlert className="text-destructive h-5 w-5" />
      </div>
    </CardWrapper>
  );
};
