---
tag: W7NB6ZRKW2
kind: problem
type: answer
answer: \frac{k}{k+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)$ is defined by $a_{1}=\frac{1}{2}, a_{n}=\frac{a_{n-1}}{2 n a_{n-1}+1}$ for $n>1$. Determine the sum $a_{1}+\ldots+a_{k}$, for any natural number $k$.
