import { CertificateApi, type CertificateVM} from "@/api";
import { WebApiService } from "./web-api-service";
import type { AxiosResponse } from "axios";

export class CertificateService extends WebApiService {

    constructor() {
        super();
        this.certificateApi = new CertificateApi();
    }

    certificateApi: CertificateApi;

    public async addCertificateToResume(resumeId: string, certificateData: CertificateVM): Promise<AxiosResponse<any>> {
        return await this.certificateApi.apiCertificateCertificatesResumeIdPostForm(resumeId, certificateData!.certificateName!, certificateData!.issuingOrganization!,
            certificateData!.issueDate!.toDateString(), this.generateHeader());
    }
    

    public async updateCertificate(certificateId: number, certificateData: CertificateVM): Promise<AxiosResponse<any>>
    {
        return await this.certificateApi.apiCertificateCertificatesCertificateIdPutForm(certificateId, certificateData!.certificateName!, certificateData!.issuingOrganization!,
            certificateData!.issueDate!.toDateString(), this.generateHeader())
    }

    public async deleteCertificate(certificateId: number)
    {
        return await this.certificateApi.apiCertificateCertificatesCertificateIdDelete(certificateId, this.generateHeader())
    }
}

const certificateService = new CertificateService();
export default certificateService;