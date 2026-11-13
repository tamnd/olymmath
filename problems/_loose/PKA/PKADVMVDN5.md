---
tag: PKADVMVDN5
kind: problem
type: answer
answer: 2^{n-1}-n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g(n, k)$ denote the number of ways to partition an $n$-element set into $k$ subsets, each with at least 2 elements.
(1) Find the counting formula for $g(n, 2)$ $(n \geqslant 4)$.
(2) Prove: $g(n+1, k)=n g(n-1, k-1)+k g(n, k) (n \geqslant 2 k \geqslant 6)$.
(3) Find $g(7,3)$.
