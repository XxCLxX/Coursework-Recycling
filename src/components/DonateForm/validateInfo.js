export default function validate(values) {
    let errors = {};

    if (!values.firstname.trim()) {
        errors.firstname = "First name required";
    }

    if (!values.lastname.trim()) {
        errors.lastname = "Last name required";
    }

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.dormroom) {
        errors.dormroom = 'Room no. is required';
    } else if (values.dormroom.length < 3) {
        errors.dormroom = 'Invalid Room no.';
    }

    if (!values.pickup) {
        errors.pickup = 'Date required';
    } else if (/^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(values.date)) {
        errors.pickup = 'Invalid date';
    }

    return errors;
}