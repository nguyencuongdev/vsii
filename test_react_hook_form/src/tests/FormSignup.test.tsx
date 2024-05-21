import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormSignup from "../components/FormSignup";
import "@testing-library/jest-dom";

describe("Test form sign up", () => {
  test("renders form correctly", () => {
    // Hiển thị component FormSignup
    render(<FormSignup />);
    // Kiểm tra xem các trường input, button submit có trên form không?
    expect(
      screen.getByLabelText("Name:", { selector: "input" })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Email:", { selector: "input" })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Age:", { selector: "input" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign up" })).toBeInTheDocument();
  });

  test("shows validation errors when form is submitted with empty", async () => {
    render(<FormSignup />);
    // Lấy phần tử button submit
    const submitButton = screen.getByRole("button", { name: "Sign up" });
    userEvent.click(submitButton);

    // Đợi component cập nhật lại state hết sau đó mới thực hiện kiểm tra kết quả test
    await waitFor(() => {
      expect(screen.getByText("Please enter a name")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("Please enter a age")).toBeInTheDocument();
    });
  });

  test("shows validation errors when form is submitted with invalid data", async () => {
    // Hiển thị component FormSignup
    render(<FormSignup />);

    // Lấy phần tử button submit và các phần tử input có trong FormSignup
    const submitButton = screen.getByRole("button", { name: "Sign up" });
    const nameInput = screen.getByLabelText("Name:", { selector: "input" });
    const emailInput = screen.getByLabelText("Email:", { selector: "input" });
    const ageInput = screen.getByLabelText("Age:", { selector: "input" });

    // Mô tả sự kiện người dùng change giá trị trong các trường input
    userEvent.type(nameInput, "cuong");
    userEvent.type(emailInput, "cuong29329.com");
    userEvent.type(ageInput, "16");

    // Mô tả sự kiện người dùng click vào button submit form
    userEvent.click(submitButton);

    // Đợi component cập nhật lại state hết sau đó mới thực hiện kiểm tra kết quả test
    await waitFor(() => {
      expect(screen.getByText("Email is not valid")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("Age must be a number between 18 and 65")
      ).toBeInTheDocument();
    });
  });

  test("submits form correctly when valid data is provided", async () => {
    // Hiển thị component FormSignup
    render(<FormSignup />);

    // Lấy phần tử button submit và các phần tử input có trong FormSignup
    const submitButton = screen.getByRole("button", { name: "Sign up" });
    const nameInput = screen.getByLabelText("Name:", { selector: "input" });
    const emailInput = screen.getByLabelText("Email:", { selector: "input" });
    const ageInput = screen.getByLabelText("Age:", { selector: "input" });

    // Mô tả sự kiện người dùng change giá trị trong các trường input
    userEvent.type(nameInput, "Cuong");
    userEvent.type(emailInput, "cuong232@gmail.com");
    userEvent.type(ageInput, "30");

    // Mô tả sự kiện người dùng click vào button submit form
    userEvent.click(submitButton);

    // Đợi component cập nhật lại state hết sau đó mới thực hiện kiểm tra kết quả test
    await waitFor(() => {
      expect(screen.queryByText("Please enter a name")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText("Please enter your email")
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Please enter a age")).not.toBeInTheDocument();
    });
  });
});
