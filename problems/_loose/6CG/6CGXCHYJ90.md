---
tag: 6CGXCHYJ90
kind: problem
type: answer
answer: (x_1, x_2, x_3, x_4) = (c, c, c, -3c)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadruplets $(x_1, x_2, x_3, x_4)$ of real numbers such that the next six equalities apply:
$$\begin{cases} x_1 + x_2 = x^2_3 + x^2_4 + 6x_3x_4\\
x_1 + x_3 = x^2_2 + x^2_4 + 6x_2x_4\\
x_1 + x_4 = x^2_2 + x^2_3 + 6x_2x_3\\
x_2 + x_3 = x^2_1 + x^2_4 + 6x_1x_4\\
x_2 + x_4 = x^2_1 + x^2_3 + 6x_1x_3 \\
x_3 + x_4 = x^2_1 + x^2_2 + 6x_1x_2 \end{cases}$$
