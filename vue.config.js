module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                @import "@/assets/_variables.scss";
                @import "@/assets/_mixins.scss";
                `
            }
        }
    }
};