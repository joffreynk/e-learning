import qs from "query-string";

type Props = {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
};

export const formQueryUrl = ({ params, key, value, keysToRemove }: Props) => {
  const currentUrl = qs.parse(params);
  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if(key && value) {
    currentUrl[key] = value;
  }
  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true }
  );
};
