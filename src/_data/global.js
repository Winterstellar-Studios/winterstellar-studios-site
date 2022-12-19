module.exports = function () {
    return {
        year:        new Date().getFullYear(),
        environment: process.env.MY_ENVIRONMENT || "development"
    };
};