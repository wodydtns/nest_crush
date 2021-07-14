import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeachersById() {
    return 'Get Teachers by Id';
  }
}
