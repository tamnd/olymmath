---
tag: PMSE3C8JBM
kind: problem
type: answer
answer: 2^{n+1}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $f(n)=2 n+1$. $\{g(n)\}$ satisfies $g(1)=3, g(n+1)=f[g(n)]$, find $g(n)$.
