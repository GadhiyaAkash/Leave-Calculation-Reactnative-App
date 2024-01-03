import * as Yup from "yup";

/**
 * Generates a validation schema based on the given fields.
 *
 * @param {Array} fields - The array of fields to generate the schema for.
 *   Each field object should have a `fieldName` property and a `validationType` property.
 * @return {Object} - The generated validation schema object.
 */
const ValidationSchema = (fields) => {
    const schemaFields = {};

    fields.forEach(({ fieldName, validationType }) => {
        let schema;

        switch (validationType) {
            case "required":
                schema = Yup.string().required(`This is a required`);
                break;
            default:
                schema = Yup.string();
                break;
        }

        schemaFields[fieldName] = schema;
    });

    return Yup.object().shape(schemaFields);
};

export default ValidationSchema;
