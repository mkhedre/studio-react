import { useRequest } from "@mongez/react-hooks";

export interface IuseMyRequestProps {
  service: () => Promise<any>;
}

export const useMyRequest = (props: IuseMyRequestProps) => {
  const { response, error, isLoading } = useRequest(() => props.service());

  return {
    Pagination: () => null,
    LoadingErrorHandler: () => null,
    response,
    error,
    isLoading,
  };
};
