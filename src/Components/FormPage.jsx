import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import styled from "styled-components";

const FormPage = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <h1>Build Your Landing Page</h1>
      <Formik
        initialValues={{
          main: "",
          secondary: "",
          subtext: "",
          buttonText: "",
          date: "",
          time: "",
          background: pencil,
        }}
        validate={(values) => {
          const errors = {};

          if (!values.main) {
            errors.main = "Required";
          }

          if (!values.secondary) {
            errors.secondary = "Required";
          }

          if (!values.date || !values.time) {
            errors.date = "Required";
          } else if (
            Date.parse(`${values.date}T${values.time}:00`) < Date.now()
          ) {
            errors.date = "Time should be in the future";
          }

          return errors;
        }}
        onSubmit={({
          main,
          secondary,
          subtext,
          buttonText,
          time,
          date,
          background,
        }) => {
          history.push({
            pathname: "/promo",
            state: {
              main: main,
              secondary: secondary,
              subtext: subtext,
              buttonText: buttonText,
              date: date,
              time: time,
              background: background,
            },
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>Main headline</p>
            <Field type="text" name="main" />
            <Error name="main" component="div" />

            <p>Secondary headline</p>
            <Field type="text" name="secondary" />
            <Error name="secondary" component="div" />

            <p>Subtext</p>
            <Field type="text" name="subtext" />
            <Error name="subtext" component="div" />

            <p>Button text</p>
            <Field type="text" name="buttonText" />
            <Error name="subtext" component="div" />

            <p>When will the promo end</p>
            <Field type="date" name="date" />
            <Field type="time" name="time" />
            <Error name="date" component="div" />

            <div className="backgrounds">
              <Label>
                <Field
                  type="radio"
                  name="background"
                  value={pencil}
                  checked
                ></Field>
                <img src={pencil} alt="pencil" />
              </Label>
              <Label>
                <Field type="radio" name="background" value={wave}></Field>
                <img src={wave} alt="wave" />
              </Label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

const pencil =
  "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&w=1920&q=80";
const wave =
  "https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

const Error = styled(ErrorMessage)`
  align-self: flex-start;
  background-color: white;
  color: red;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Wrapper = styled.div`
  background-color: rgba(255, 131, 0, 0.7);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem;
  color: white;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    align-self: center;
  }

  input {
    font-size: 1.2rem;
  }
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
  }
  .backgrounds {
    display: flex;
    align-items: center;
    align-self: center;
    gap: 0.5rem;
  }
  a {
    align-self: center;
  }
  button {
    align-self: center;
    padding: 0.75rem;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 5px;
  }
`;

export default FormPage;
