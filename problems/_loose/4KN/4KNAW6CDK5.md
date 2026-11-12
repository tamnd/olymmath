---
tag: 4KNAW6CDK5
kind: problem
type: answer
answer: a_{n}=\frac{n(n+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of real numbers $a_{n}, n=1,2,3, \ldots$ is such that $a_{n+1}=a_{n}+\sqrt{a_{n}+a_{n+1}}, n=1,2,3, \ldots$ and $a_{1}=1$. Find an explicit formula expressing the number $a_{n}$ in terms of $n$.
