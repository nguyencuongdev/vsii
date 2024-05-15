import { FieldValues, useForm } from "react-hook-form";

type FormSignupValues = {
  account: string;
  email: string;
  password: string;
  confimPassword: string;
};

function FormSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormSignupValues>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="w-50 mt-5 border border-primary p-4 rounded form-signup"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-4">Đăng ký</h2>
      <div className="form-group d-flex form-inline justify-content-start">
        <label
          htmlFor="#account"
          className="col-lg-2 text-left justify-content-start pl-0"
        >
          Tên đăng nhập:
        </label>
        <input
          type="text"
          className="form-control col-lg-10"
          id="account"
          {...register("account", {
            required: {
              value: true,
              message: "Vui lòng không để trống!",
            },
            maxLength: {
              value: 50,
              message: "Account không được vượt quá 50 ký tự",
            },
            minLength: {
              value: 8,
              message: "Account phải có ít nhất 8 ký tự",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "Account không được chứa khoảng trăng, ký tự đặc biệt",
            },
          })}
        />
      </div>
      {errors.account && (
        <p className="text-danger my-2">{errors.account.message}</p>
      )}
      <div className="form-group d-flex form-inline justify-content-start">
        <label
          htmlFor="#email"
          className="col-lg-2 text-left justify-content-start pl-0"
        >
          Email:
        </label>
        <input
          type="email"
          className="form-control col-lg-10"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Vui lòng không để trống!",
            },
            maxLength: {
              value: 255,
              message: "Độ dài của email không được vượt quá 255 ký tự",
            },
          })}
        />
      </div>
      {errors.email && (
        <p className="text-danger my-2">{errors.email.message}</p>
      )}
      <div className="form-group d-flex form-inline justify-content-start">
        <label
          htmlFor="#password"
          className="col-lg-2 text-left justify-content-start pl-0"
        >
          Mật khẩu:
        </label>
        <input
          type="password"
          className="form-control col-lg-10"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "Vui lòng không để trống!",
            },
            maxLength: {
              value: 255,
              message: "Độ dài của password không được vượt quá 255 ký tự",
            },
            minLength: {
              value: 8,
              message: "Mật khẩu phải có tối thiểu 8 ký tự",
            },
          })}
        />
      </div>
      {errors.password && (
        <p className="text-danger my-2">{errors.password.message}</p>
      )}
      <div className="form-group d-flex form-inline justify-content-start">
        <label
          htmlFor="#confirmPassword"
          className="col-lg-2 text-left justify-content-start pl-0"
        >
          Xác nhận mật khẩu:
        </label>
        <input
          type="text"
          className="form-control col-lg-10"
          id="confirmPassword"
          {...register("confimPassword", {
            required: {
              value: true,
              message: "Vui lòng không để trống!",
            },
            validate: (value) => {
              return (
                value === getValues("password") ||
                "Mật khẩu xác nhận không khớp với mật khẩu!"
              );
            },
          })}
        />
      </div>
      {errors.confimPassword && (
        <p className="text-danger my-2">{errors.confimPassword.message}</p>
      )}
      <div className="form-group d-flex form-inline justify-content-start">
        <button className="btn btn-primary btn-block" type="submit">
          Đăng ký
        </button>
      </div>
    </form>
  );
}

export default FormSignup;
