import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get Student by Id';
  }

  @Post()
  createStudent() {
    return 'Create Student';
  }
  @Put()
  updateStudent() {
    return 'update Student by Id';
  }
}
