interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Kitchen Staff', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant QR',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
