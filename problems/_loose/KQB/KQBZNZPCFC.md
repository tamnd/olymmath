---
tag: KQBZNZPCFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0=0<a_1<a_2<...<a_n$ be real numbers . Supppose $p(t)$ is a real valued polynomial of degree $n$ such that

$\int_{a_j}^{a_{j+1}} p(t) dt = 0\ \ \forall \ 0\le j\le n-1$

Show that , for $0\le j\le n-1$ , the polynomial $p(t)$ has exactly one root in the interval $ (a_j,a_{j+1})$
