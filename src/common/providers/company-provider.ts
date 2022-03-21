import { Injectable } from '@nestjs/common';
import { CompanyModel } from '../model/company-model';
import { CompanyService } from '../services/company.service';

@Injectable()
export class CompanyProvider {
  constructor(private companyService: CompanyService) {}

  // methods
  public getCompanyById(id: string): CompanyModel {
    return this.companyService.getCompanies().find((c) => c.id == id);
  }
}
