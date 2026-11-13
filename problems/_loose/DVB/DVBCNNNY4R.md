---
tag: DVBCNNNY4R
kind: problem
type: answer
answer: (n)=3\times2^{n-1}+2^{n-1}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f, g: \mathbf{N} \rightarrow \mathbf{N}, f(n)=2 n+1, g(1)=3$ and
$$
g(n) \geqslant f[g(n-1)], \forall n \geqslant 2 .
$$

Find $g(n)$.
