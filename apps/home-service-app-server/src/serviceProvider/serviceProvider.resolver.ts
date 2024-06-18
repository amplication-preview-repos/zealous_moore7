import * as graphql from "@nestjs/graphql";
import { ServiceProviderResolverBase } from "./base/serviceProvider.resolver.base";
import { ServiceProvider } from "./base/ServiceProvider";
import { ServiceProviderService } from "./serviceProvider.service";

@graphql.Resolver(() => ServiceProvider)
export class ServiceProviderResolver extends ServiceProviderResolverBase {
  constructor(protected readonly service: ServiceProviderService) {
    super(service);
  }
}
