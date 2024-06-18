import { ServiceRequest as TServiceRequest } from "../api/serviceRequest/ServiceRequest";

export const SERVICEREQUEST_TITLE_FIELD = "id";

export const ServiceRequestTitle = (record: TServiceRequest): string => {
  return record.id?.toString() || String(record.id);
};
