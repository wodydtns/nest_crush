import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { StudentTeacherController } from '../teacher/student.controller';
import { TeacherController } from '../teacher/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
})
export class AppModule {}
