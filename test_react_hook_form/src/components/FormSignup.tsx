import { FieldValues, useForm } from "react-hook-form";

type FormSignupValues = {
  name: string;
  email: string;
  age: number;
};

const FormSignupOptions = {
  name: {
    required: {
      value: true,
      message: "Please enter a name",
    },
  },
  email: {
    required: {
      value: true,
      message: "Please enter your email",
    },
    validate: (value: string) => {
      const regex = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return regex.test(value) || "Email is not valid";
    },
  },
  age: {
    required: {
      value: true,
      message: "Please enter a age",
    },
    validate: (value: number) => {
      const regex = new RegExp(/^\d{2}$/);
      if (regex.test(value.toString()) && 18 <= value && value <= 65) {
        return true;
      }
      return "Age must be a number between 18 and 65";
    },
  },
};

function FormSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSignupValues>();

  const onSubmit = async (data: FieldValues) => {
    // Call api to server
    console.log(data);
    // alert("Đăng ký thành công");
    reset();
  };

  return (
    <form
      className="form-signup border rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="form-title text-primary my-4 border-bottom pb-3">
        Sign up
      </h2>
      <div className="form-body p-4">
        <div className="form-group form-inline">
          <label
            htmlFor="name"
            className="form-label col-lg-2 justify-content-start"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            className={`form-control col-lg-10 ${errors.name ? "invalid" : ""}`}
            {...register("name", FormSignupOptions.name)}
          />
          {errors.name && (
            <p className="text-danger my-2 mb-0 col-lg-12">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="form-group form-inline">
          <label
            htmlFor="email"
            className="form-label col-lg-2 justify-content-start"
          >
            Email:
          </label>
          <input
            id="email"
            type="text"
            className={`form-control col-lg-10 ${
              errors.email ? "invalid" : ""
            }`}
            {...register("email", FormSignupOptions.email)}
          />
          {errors.email && (
            <p className="text-danger my-2 mb-0 col-lg-12">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="form-group form-inline">
          <label
            htmlFor="age"
            className="form-label col-lg-2 justify-content-start"
          >
            Age:
          </label>
          <input
            id="age"
            type="text"
            className={`form-control col-lg-10 ${errors.age ? "invalid" : ""}`}
            {...register("age", FormSignupOptions.age)}
          />
          {errors.age && (
            <p className="text-danger my-2 mb-0 col-lg-12">
              {errors.age.message}
            </p>
          )}
        </div>
        <div className="form-group d-flex justify-content-center">
          <button className="btn btn-primary form-button mr-2">Sign up</button>
        </div>
      </div>
    </form>
  );
}

export default FormSignup;
