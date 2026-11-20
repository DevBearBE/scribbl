import { Field } from "@base-ui/react/field";
import type { PropsWithChildren } from "react";
import { field } from "./field.styles";

export type FieldShellProps = PropsWithChildren<{
  name: string;
  label: string;
  required?: boolean;
}>;

export const FieldShell = ({
  name,
  label,
  required = false,
  children,
}: FieldShellProps) => {
  const styles = field();

  return (
    <Field.Root name={name} className={styles.root()}>
      <Field.Label className={styles.label()}>
        {label}
        {required && <span>*</span>}
      </Field.Label>
      {children}
      <Field.Error className={styles.error()} />
    </Field.Root>
  );
};
