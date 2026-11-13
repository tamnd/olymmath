---
tag: FBPZYRMTCV
kind: problem
type: answer
answer: p=2,q=5,n=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine all prime numbers $p$ and $q$ for which, for some $n>1$,

$$
\frac{p^{2 n+1}-1}{p-1}=\frac{q^{3}-1}{q-1}
$$
