import { Field } from 'formik';
import { Textarea } from '../Fields';
import { Fieldset } from '.';

const Bio = () => (
  <Fieldset
    name="bio"
    label={<div className="text-gray-800 font-semibold">Bio</div>}
    help={<p className="text-gray-600">Optional information about you</p>}
  >
    <Field name="bio" as={Textarea} />
  </Fieldset>
);

export default Bio;
