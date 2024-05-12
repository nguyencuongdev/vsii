const validates = {
    required(value: string): boolean {
        return value.trim().length > 0 ? true : false;
    },
    email(value: string): boolean {
        // email: ...@gmail.com
        const regex = new RegExp(/^[a-z0-9A-Z]+@gmail.com$/);
        return regex.test(value);
    },
    phone(value: string): boolean {
        //Phone: +84
        const regex = new RegExp(/^0\d{9}$/);
        return regex.test(value);
    },
};

export default validates;
