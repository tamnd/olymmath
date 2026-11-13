---
tag: CDAJZT06DW
kind: problem
type: answer
answer: 1,2,\cdots,2012
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $n$, such that there exist positive integers $x_{1}, x_{2}, \cdots, x_{2012}$, satisfying
$$
x_{1}<x_{2}<\cdots<x_{2012} \text {, }
$$

and $\frac{1}{x_{1}}+\frac{2}{x_{2}}+\cdots+\frac{2012}{x_{2012}}=n$.
