import { Controller, Get, Module } from '@nestjs/common';

@Controller('health')
class HealthController {
  @Get()
  getHealth() {
    return {
      service: 'poc-submodule-main',
      status: 'ok',
      submodules: ['project1', 'project2', 'project3']
    };
  }
}

@Module({
  controllers: [HealthController]
})
export class AppModule {}
