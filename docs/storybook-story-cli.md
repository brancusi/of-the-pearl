# Storybook Story Scaffold CLI

This project includes a small generator that scaffolds Storybook wiring for Helix/ClojureScript components.

The CLI automates the three mechanical steps required for every new story:

1. Add a wrapped component export in `storybook-src/otp/storybook/stories.cljs`
2. Add that export to the `:storybook` `:exports` map in `shadow-cljs.edn`
3. Create a starter CSF story file in `storybook-src/stories/`

## Command

Run via npm script:

```bash
npm run storybook:create -- --component <namespace/component-var>
```

Direct script entrypoint:

```bash
node scripts/create-storybook-story.js --component <namespace/component-var>
```

## Required Argument

- `--component`
  - Format: `namespace/var-name`
  - Example: `otp.ui.button/main-button`

If omitted or invalid, the command exits with an error.

## Optional Arguments

- `--title`
  - Full Storybook title string
  - Example: `UI/Button`
- `--category`
  - Category prefix used when `--title` is not supplied
  - Default: `UI`
- `--story-file`
  - Story filename (relative to `storybook-src/stories/`)
  - Example: `Button.stories.js`
- `--extension`
  - Story file extension
  - Allowed: `js`, `jsx`
  - Default: `js`
- `--dry-run`
  - Prints intended changes without writing files

## Naming Behavior

For `--component otp.ui.button/main-button`:

- Clojure var: `main-button`
- Generated export name: `MainButton` (PascalCase)
- Default story file: `MainButton.stories.js`
- Default story title: `UI/MainButton` (or `<category>/MainButton`)

## Examples

Default scaffold:

```bash
npm run storybook:create -- --component otp.ui.button/main-button
```

Use a custom story title:

```bash
npm run storybook:create -- --component otp.ui.button/main-button --title "UI/Button"
```

Use a custom filename and JSX story file:

```bash
npm run storybook:create -- --component otp.ui.section-header/section-header --story-file SectionHeader.stories.jsx --extension jsx
```

Preview changes only:

```bash
npm run storybook:create -- --component otp.ui.button/main-button --dry-run
```

## What Gets Generated

The generated story template contains:

- Import from `cljs-out/stories.js`
- `export default` with `title`, `component`, and empty `argTypes`
- A `Default` story with empty `args`

You should then customize `argTypes` and `args` based on the component props.

## Safety Checks

The script aborts without writing if:

- Story file already exists
- The export already exists in `storybook-src/otp/storybook/stories.cljs`
- The export already exists in `shadow-cljs.edn`
- Required structures are not found in expected files

## Recommended Workflow

1. Run the generator with `--dry-run` first.
2. Run without `--dry-run` to apply changes.
3. Fill in `argTypes` and `args` in the generated story file.
4. Start Storybook compile/watch:

```bash
npm run shadow-storybook:dev
npm run storybook-ui:dev
```

5. Verify the new story appears in Storybook.
