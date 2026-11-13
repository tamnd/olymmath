---
tag: E5DQA0VTQT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{N}^{*} \rightarrow \mathbb{N}^{*}$ be a function that satisfies:

1. If $m \wedge n=1$ then $f(m) \wedge f(n)=1$
2. $\forall n \in \mathbb{N}^{*} n \leqslant f(n) \leqslant n+2012$

Show that $\forall p$ prime and $\forall n \in \mathbb{N}^{*}$ if $p \mid f(n)$ then $p \mid n$
