// types/application.ts
export interface ApplicantInfo {
  fullName: string;
  email: string;
  phone: string;
  ssn: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  previousAddress?: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface BusinessInfo {
  legalName: string;
  dbaName?: string;
  businessType:
    | "corporation"
    | "llc"
    | "partnership"
    | "sole-proprietorship"
    | "individual";
  taxId: string;
  dunsNumber?: string;
  established: string;
  natureOfBusiness: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  fax?: string;
  employees: number;
  annualSales: number;
  annualProfit: number;
  bankInfo: {
    bankName: string;
    accountNumber: string;
    bankContact: string;
    bankPhone: string;
  };
}

export interface ProjectInfo {
  projectName?: string;
  propertyType?: string;
  address?: string;
  description?: string;
  constructionType?: "new" | "rehabilitation" | "other";
  squareFootage?: number;
  commercialPercentage?: number;
  totalCosts?: number;
  intendedUse?: string;
}

export interface FinancingInfo {
  loanType: "business-credit" | "real-estate" | "mca";
  requestedAmount: number;
  useOfFunds: string[];
  existingAdvance?: {
    hasExisting: boolean;
    funder?: string;
    balance?: number;
  };
  witholdingPercentage?: number;
}

export interface OwnershipInfo {
  owners: Array<{
    name: string;
    ssn: string;
    address: string;
    percentageOwned: number;
    title: string;
  }>;
  personalGuarantee: boolean;
  guarantors?: Array<{
    name: string;
    address: string;
    phone: string;
  }>;
}

export interface LegalQuestions {
  outstandingJudgments: boolean;
  bankruptcyHistory: boolean;
  pendingLawsuits: boolean;
}

export interface ApplicationData {
  applicantInfo: ApplicantInfo;
  businessInfo: BusinessInfo;
  projectInfo?: ProjectInfo;
  financingInfo: FinancingInfo;
  ownershipInfo: OwnershipInfo;
  legalQuestions: LegalQuestions;
  documents: {
    uploaded: string[];
    required: string[];
  };
  applicationDate: string;
  applicationId: string;
}
