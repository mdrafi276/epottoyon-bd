import { useQuery } from "@tanstack/react-query";
import { getAllCertificates } from "../../api/certificates";

const ApplyForCertificate = () => {
    const {
        data: certificates,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["certificate"],
        queryFn: getAllCertificates,
    });

    return <div>{certificates?.length}</div>;
};

export default ApplyForCertificate;
