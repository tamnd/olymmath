---
tag: HC7QX650RG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the random variable $X$ and the $\sigma$-algebra $\mathscr{G}$ be independent (collectively) of the $\sigma$-algebra $\mathscr{E}$, and suppose $\mathrm{E}|X|<\infty$. Show that almost surely

$$
\mathrm{E}(X \mid \mathscr{G} \vee \mathscr{E})=\mathrm{E}(X \mid \mathscr{G})
$$

Verify by example that the independence of $X$ from $\mathscr{E}$ alone is not sufficient for the above equality to hold.
