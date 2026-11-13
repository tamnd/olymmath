---
tag: 5A3S32MHQW
kind: problem
type: answer
answer: a_{n}=\frac{n(n-1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=0, a_{2}=1, a_{n}=\max _{1 \leq i \leq n-1}\left\{a_{i}+a_{n-i}+i\right\}$, find the general term formula of $\left\{a_{n}\right\}$.
