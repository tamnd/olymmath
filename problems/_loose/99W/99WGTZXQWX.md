---
tag: 99WGTZXQWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244341
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(P_n(X))_{n\in\mathbb{N}}$ be a sequence of polynomials defined as: $P_1(X)=X-1, P_2(X)=X^2-X-1, P_n(X)=XP_{n-1}(X)-P_{n-2}(X), \forall n>2$. For every nonnegative integer $n{}$ find all roots of the polynomial $P_n(X)$.
