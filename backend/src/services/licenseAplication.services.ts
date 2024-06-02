import { SolicitudLicencia } from "@prisma/client";
import { prisma } from "../config/prisma";
import { HttpException } from "../utils/HttpException";
import { CODE } from "../utils/constants";

class LicenseApplicationServices {
  public createLicense = async (data: SolicitudLicencia) => {};

  public getAllLicenses = async () => {};

  public getMyLicenses = async () => {};

  public getLicense = async (id: string) => {
    return "";
  };

  public updateLicense = async (id: string, data: SolicitudLicencia) => {};
}

export default new LicenseApplicationServices();
