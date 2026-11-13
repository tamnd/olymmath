---
tag: MN3N3NH6E7
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=67914
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of numbers $x_{1}, x_{2}, \ldots$ is such that $x_{1}=1 / 2$ and $x_{k+1}=x_{k}^{2}+x_{k}$ for any natural number $k$.

Find the integer part of the sum $\frac{1}{x_{1}+1}+\frac{1}{x_{1}+1}+\ldots+\frac{1}{x_{100}+1}$.
