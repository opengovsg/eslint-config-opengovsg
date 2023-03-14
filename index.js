module.exports = {
  // By default, use JavaScript lint rules
  extends: ['./javascript'],
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./typescript'],
    },
    {
      files: ['*.tsx'],
      extends: ['./typescript', './react'],
    },
    {
      files: ['*.js'],
      extends: ['./javascript'],
    },
    {
      files: ['*.jsx'],
      extends: ['./javascript', './react'],
    },
  ],
}
