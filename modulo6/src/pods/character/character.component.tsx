import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from 'common/components';

import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;

  onSave: (character: Character) => void;
}

export const HotelComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="type" label="Type" />
          <TextFieldComponent name="gender" label="Gender" />
          <TextFieldComponent name="origin" label="Origin" />
          <TextFieldComponent name="location" label="Location" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="episode" label="Episode" />
          <TextFieldComponent name="created" label="Created" />
          <TextFieldComponent name="bestsentences" label="BestSentences" />

          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
