---
tag: 35PXEP6D3T
kind: problem
type: answer
answer: \frac{4^{2}-n^{2}}{3n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of $m$ pairs of positive integers $(a, b)$ $(1 \leqslant a<b \leqslant n)$. Prove: there are at least $\frac{4 m^{2}-m n^{2}}{3 n}$ triples $(a, b, c)$ such that
$$
(a, b) 、(b, c) 、(a, c) \in S \text {. }
$$
