export type CreateCountyParams = {
  code: string;
  name: string;
};

export type UpdateCountyParams = {
  code: string;
  name: string;
  enabled: boolean;
};

export type CreateAccountTypeParams = {
  name: string;
};

export type UpdateAccountTypeParams = {
  name: string;
};

export class CreateGLTypeParams {
  name: string;
  description: string;
  accountNumber: string;
  isBankAccount: boolean;
}

export class UpdateGLTypeParams {
  name: string;
  description: string;
  accountNumber: string;
  isBankAccount: boolean;
}

export class CreateBankAccountTypeParams {
  name: string;
  accountNumber: string;
  branch: string;
}

export class UpdateBankAccountTypeParams {
  name: string;
  accountNumber: string;
  branch: string;
  enabled: boolean;
}

export class CreateRoleTypeParams {
  name: string;
}

export class UpdateRoleTypeParams {
  name: string;
}

export class CreateProductTypeParams {
  name: string;
}

export class UpdateProductTypeParams {
  name: string;
}
