import { TFunction } from 'i18next';

export const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
  // empty string to replace placeholder
  event.target.placeholder = '';
};

export const handleBlur = (
  event: React.FocusEvent<HTMLInputElement>,
  t: TFunction,
  i18nKey: string,
) => {
  // set placeholder back to right translation text
  event.target.placeholder = t(i18nKey);
};
