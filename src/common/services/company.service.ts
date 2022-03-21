import { Injectable } from '@nestjs/common';
import companyData from '../contents/company-data.json';
import { CompanyModel } from '../model/company-model';

@Injectable()
export class CompanyService {
  // methods
  getCompanies(): CompanyModel[] {
    return companyData as CompanyModel[];
  }
}
