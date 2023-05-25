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
export declare class CreateGLTypeParams {
    name: string;
    description: string;
    accountNumber: string;
    isBankAccount: boolean;
}
export declare class UpdateGLTypeParams {
    name: string;
    description: string;
    accountNumber: string;
    isBankAccount: boolean;
}
export declare class CreateBankAccountTypeParams {
    name: string;
    accountNumber: string;
    branch: string;
}
export declare class UpdateBankAccountTypeParams {
    name: string;
    accountNumber: string;
    branch: string;
    enabled: boolean;
}
export declare class CreateRoleTypeParams {
    name: string;
}
export declare class UpdateRoleTypeParams {
    name: string;
}
export declare class CreateProductTypeParams {
    name: string;
}
export declare class UpdateProductTypeParams {
    name: string;
}
