---
tag: ARA5AAF7WZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be independent random variables with distribution functions $F$ and $G$ respectively. Show that

$$
\mathrm{P}(X=Y)=\sum_{-\infty<x<\infty}[F(x)-F(x-)] \cdot[G(x)-G(x-)]
$$
