---
tag: 8E720YGESJ
kind: problem
type: answer
answer: \frac{2(b-)}{+b}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $a, b, a<b$. Let $x_{1}, x_{2}, \cdots, x_{2022} \in[a, b]$, find the maximum value of $\frac{\left|x_{1}-x_{2}\right|+\left|x_{2}-x_{3}\right|+\cdots+\left|x_{2021}-x_{2022}\right|+\left|x_{2022}-x_{1}\right|}{x_{1}+x_{2}+\cdots+x_{2022}}$.
