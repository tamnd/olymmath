---
tag: RMP56S3RXB
kind: problem
type: answer
answer: 2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the expression $x_{1}: x_{2}: \ldots: x_{n}$ for indicating the order of operations, parentheses are placed and the result is written as a fraction:

$$
\frac{x_{i_{1}} x_{i_{2}} \ldots x_{i_{k}}}{x_{i_{1}} x_{l_{2}} \ldots x_{i_{n-k}}}
$$

(every letter $x_{1}, x_{2}, \ldots, x_{n}$ stands either in the numerator or in the denominator of the fraction). How many different expressions can be obtained in this way for all possible ways of placing parentheses?
