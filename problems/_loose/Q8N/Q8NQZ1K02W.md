---
tag: Q8NQZ1K02W
kind: problem
type: answer
answer: \frac{n+1+(-1)^{n+1}}{n+2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $P$ of degree $n \in \mathbb{N}$ satisfies:

$$
\text { for } k=0,1, \ldots, n, P(k)=\frac{k}{k+1}
$$

Determine $P(n+1)$.
