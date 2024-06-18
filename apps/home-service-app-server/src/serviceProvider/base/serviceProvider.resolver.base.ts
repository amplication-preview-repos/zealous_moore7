/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ServiceProvider } from "./ServiceProvider";
import { ServiceProviderCountArgs } from "./ServiceProviderCountArgs";
import { ServiceProviderFindManyArgs } from "./ServiceProviderFindManyArgs";
import { ServiceProviderFindUniqueArgs } from "./ServiceProviderFindUniqueArgs";
import { DeleteServiceProviderArgs } from "./DeleteServiceProviderArgs";
import { ServiceProviderService } from "../serviceProvider.service";
@graphql.Resolver(() => ServiceProvider)
export class ServiceProviderResolverBase {
  constructor(protected readonly service: ServiceProviderService) {}

  async _serviceProvidersMeta(
    @graphql.Args() args: ServiceProviderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ServiceProvider])
  async serviceProviders(
    @graphql.Args() args: ServiceProviderFindManyArgs
  ): Promise<ServiceProvider[]> {
    return this.service.serviceProviders(args);
  }

  @graphql.Query(() => ServiceProvider, { nullable: true })
  async serviceProvider(
    @graphql.Args() args: ServiceProviderFindUniqueArgs
  ): Promise<ServiceProvider | null> {
    const result = await this.service.serviceProvider(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ServiceProvider)
  async deleteServiceProvider(
    @graphql.Args() args: DeleteServiceProviderArgs
  ): Promise<ServiceProvider | null> {
    try {
      return await this.service.deleteServiceProvider(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
