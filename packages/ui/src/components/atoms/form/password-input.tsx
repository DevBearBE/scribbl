import { type ComponentProps, useState } from "react";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { Input } from "./input";

type PasswordInputProps = Omit<
  ComponentProps<typeof Input>,
  "type" | "trailing"
>;

export const PasswordInput = (props: PasswordInputProps) => {
  const [readable, setReadable] = useState(false);

  return (
    <Input
      leadingIcon="lock"
      {...props}
      type={readable ? "text" : "password"}
      trailing={
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => setReadable((current) => !current)}
          aria-label={readable ? "Hide password" : "Show password"}
        >
          <Icon name={readable ? "eyeClosed" : "eye"} />
        </Button>
      }
    />
  );
};
