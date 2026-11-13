---
tag: PKXG9YR274
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77793
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(\alpha, \beta)$ of strictly positive real numbers such that if $f$ is a function from $\mathbb{N}^{*}$ to $\mathbb{R}$ satisfying $f(x+y)=f(x)+f(y)$ for every pair $(x, y)$ of strictly positive integers satisfying $\alpha<\frac{x}{y}<\beta$, then there exists $c \in \mathbb{R}$ such that for every strictly positive integer $n$, $f(n)=c n$.
