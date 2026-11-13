---
tag: KCKV0937YR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuous functions $f : \mathbb R \to \mathbb R$ such that:
(a) $\lim_{x \to \infty}f(x)$ exists;
(b) $f(x) = \int_{x+1}^{x+2}f(t) dt$, for all $x \in \mathbb R$.
