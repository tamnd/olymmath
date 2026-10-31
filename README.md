# olymmath

All olympiad mathematics problems and their solutions in one place.

The site is at https://olymmath.tamnd.com. A mirror is at https://tamnd.github.io/olymmath/.

## What is in this repository

This repository holds the content. The toolchain `om` that checks the content and builds the site is in [tamnd/olymmath-agent](https://github.com/tamnd/olymmath-agent).

| Path | What it holds |
|---|---|
| `registers/competitions.yaml` | the register of competitions |
| `editions/<competition>/<year>.yaml` | one edition of a competition: the place, the papers and the positions |
| `problems/<competition>/<year>/<position>.md` | one problem: the front matter and the statement in Markdown with TeX |

## The rules for the text

1. The statement of a problem comes from a human source. The best source is the official paper. A model never writes a statement.
2. Each statement has a source with a name, a URL and a page.
3. Each statement has an origin and a licence zone. The zone tells what the site can show: Z1 is the full text with an open licence, Z2 is the text quoted with its source, and Z3 is a link only.

## Example

The file `problems/imo/2024/p1.md`:

```markdown
---
competition: imo
year: 2024
position: p1
answer: 'All even integers $\alpha$.'
topics: [N]
type: answer
source:
  name: IMO 2024 official English paper
  url: https://www.imo-official.org/assets/documents/problems/2024/2024_eng.pdf
  page: 1
  origin: H1
  zone: Z2
---
Determine all real numbers $\alpha$ such that, for every positive integer $n$, ...
```

## Check and build

```sh
go install github.com/tamnd/olymmath-agent/cmd/om@latest
om check -content .
om site build -content . -out build/site
```

## Licences

The licences are per path. `REUSE.toml` gives the licence of each path.

- The registers, the edition files and the front matter are facts. They have the CC0 1.0 licence.
- Solutions written for olymmath have the CC BY-SA 4.0 licence.
- The statements of competition problems belong to their organizers. Each problem file names its source. The site quotes them as a reference with a link to the source. If you hold the rights to a text and want a change, open an issue.
- The scripts and the workflows have the Apache 2.0 licence.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md).
