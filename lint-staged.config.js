const path = require("path");

const toRelative = (absPaths, relative = process.cwd()) =>
  absPaths.map((file) => path.relative(relative, file));

module.exports = {
  // 'api_server/**/*.go': () => {
  //   const linter =
  //     'docker-compose run --rm golint golangci-lint run --fast --fix'
  //   const builder = 'docker-compose run --rm  api-server go build'

  //   return [linter, builder]
  // },
  "(src/**/*).{vue,js,ts}": (filenames) => [
    `prettier --write ${toRelative(filenames).join(" ")}`,
    `eslint --cache --fix --quiet ${toRelative(filenames).join(" ")}`,
  ],
  // "(src/**/*).{css,vue}": (filenames) => [
  //   `stylelint --fix ${toRelative(filenames).join(" ")}`,
  // ],
  // 'docs/**/*.yaml': () => [`make lint-openapi`],
  // 'frontend/**/*.{js,vue}': () => {
  //   const builder = 'cd frontend && yarn generate:dev'
  //   return [builder]
  // },
};
