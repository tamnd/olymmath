---
tag: TBPFMY07A2
kind: problem
type: answer
answer: u_{n}=F_{n+2}^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u_{n}$ be the sequence defined by $u_{1}=4, u_{2}=9$ and then $u_{n}=3 u_{n-1}-u_{n-2}-2 \cdot(-1)^{n}$. Find $u_{n}$.
