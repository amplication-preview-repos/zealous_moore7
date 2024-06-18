import { ServiceProvider as TServiceProvider } from "../api/serviceProvider/ServiceProvider";

export const SERVICEPROVIDER_TITLE_FIELD = "id";

export const ServiceProviderTitle = (record: TServiceProvider): string => {
  return record.id?.toString() || String(record.id);
};
