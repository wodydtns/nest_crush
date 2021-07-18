import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Controller('teacher/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }
  @Put('/:studentId')
  updateStudentsTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
