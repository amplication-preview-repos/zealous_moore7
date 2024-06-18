import { Module } from "@nestjs/common";
import { ServiceProviderModuleBase } from "./base/serviceProvider.module.base";
import { ServiceProviderService } from "./serviceProvider.service";
import { ServiceProviderController } from "./serviceProvider.controller";
import { ServiceProviderResolver } from "./serviceProvider.resolver";

@Module({
  imports: [ServiceProviderModuleBase],
  controllers: [ServiceProviderController],
  providers: [ServiceProviderService, ServiceProviderResolver],
  exports: [ServiceProviderService],
})
export class ServiceProviderModule {}
