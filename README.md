### Dev

Prep dev

```bash
npm i
```

Start dev

```bash
npm run dev
```

Jack in via calva, shadow-cljs -> :app

Fire up http://localhost:4200/

### Deployment

Build the release package

```bash
npm run release
```

Log into the correct netlify account

```
netlify sites:list
```

Make sure the amp site is listed, so you know you are logged into the right account

```
npm run release
netlify deploy --prod
```

Until netlify updates clojure, build manualy
