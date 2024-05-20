import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidation from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using Zod

    const { student: studentData } = req.body;

    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(studentData);

    // data validation using zod

    const zodParsedData = studentValidation.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // if (error) {
    //   res.status(500).send({
    //     success: false,
    //     message: 'Something went wrong!',
    //     error: error.details,
    //   });
    // }

    res.status(200).send({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
