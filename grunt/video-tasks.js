module.exports = {
    // webm: {
    // },
    copy: {
        files: [{
            expand: true,
            cwd: "<%= package.src.videos %>",
            src: "**/*.{mp4,webm}",
            dest: "<%= package.build.videos %>"
        }]
    },
    watch: {
        files: [
            "<%= package.src.images %>**/*.{mp4,webm}"
        ],
        tasks: ["copy:video"]
    }
};
