import { Injectable } from '@nestjs/common';
import companyData from '../contents/company-data.json';
import { CompanyModel } from '../model/company-model';

@Injectable()
export class CompanyService {
  // methods
  // TODO : data come from API
  getCompanies(): CompanyModel[] {
    return companyData as CompanyModel[];
  }
}
