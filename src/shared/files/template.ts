module.exports = (name: any) => {
    return `
        export default {
            ${name}() {
                return //your template here;
            }
        }
    `;
}