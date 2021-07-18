import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }
  getTeachersById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
