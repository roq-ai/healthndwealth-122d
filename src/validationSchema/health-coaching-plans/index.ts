import * as yup from 'yup';

export const healthCoachingPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  user_id: yup.string().nullable(),
});
