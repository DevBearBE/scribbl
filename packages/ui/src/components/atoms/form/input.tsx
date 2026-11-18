import { Field } from "@base-ui/react/field";
import type { ReactNode } from "react";
import { Icon } from "../icon/icon";
import type { IconName } from "../icon/icon-list";
import { field } from "./field.styles";
import { FieldShell, type FieldShellProps } from "./field-shell";

type InputProps = Omit<Field.Control.Props, "className" | "name"> &
  Omit<FieldShellProps, "children"> & {
    className?: string;
    leadingIcon?: IconName;
    trailing?: ReactNode;
  };

export const Input = ({
  name,
  label,
  required,
  leadingIcon,
  trailing,
  className,
  ...props
}: InputProps) => {
  const styles = field();

  return (
    <FieldShell name={name} label={label} required={required}>
      <div className={styles.box()}>
        {leadingIcon && (
          <Icon name={leadingIcon} className={styles.leading()} />
        )}
        <Field.Control
          className={styles.input({
            leading: !!leadingIcon,
            trailing: !!trailing,
            className,
          })}
          required={required}
          {...props}
        />
        {trailing && <div className={styles.trailing()}>{trailing}</div>}
      </div>
    </FieldShell>
  );
};
