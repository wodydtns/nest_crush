export class FindTeacherResponseDto {
  id: string;
  name: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}
