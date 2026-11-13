---
tag: YV20V2Q0FY
kind: problem
type: answer
answer: "1990"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the numbers $x_{1}, \cdots, x_{1991}$ satisfy the condition
$$
\left|x_{1}-x_{2}\right|+\cdots+\left|x_{1990}-x_{1991}\right|=1991 \text {, }
$$

and $y_{k}=\frac{1}{k}\left(x_{1}+\cdots+x_{k}\right), k=1, \cdots, 1991$. Try to find the maximum value that the following expression can achieve.
$$
\left|y_{1}-y_{2}\right|+\cdots+\left|y_{1990}-y_{1991}\right| .
$$
