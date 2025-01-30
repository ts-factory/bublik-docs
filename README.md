## This repository builds Bublik documentation and commits artifacts in `dist` folder

### How to add new build artifact

1. Open `config.json`
2. Add config for application to be built

Example config:

```json
{
  "url": "http://example.com"
  "base": "/prefix/docs/",
  "output": "output-folder-name"
}
```

This config will produce folder `output-folder-name` at `dist/output-folder-name`
Be aware that this application will be expected **to be published at URL `/prefix/docs/`**
