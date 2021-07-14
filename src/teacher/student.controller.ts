import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teacher/:teacherId/students')
export class StudentTeacherController {
  @Get('')
  getStudents() {
    return 'Get All Students That belong To a Teacher';
  }
  @Put('/:studentId')
  updateStudentsTeacher() {
    return 'update Student Teachers ';
  }
}
