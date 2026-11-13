---
tag: 83WNHRTXTX
kind: problem
type: answer
answer: (\frac{1}{4},\frac{1}{4},\frac{1}{4},\frac{1}{4})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all quadruples of positive real numbers $(a, b, c, d)$ such that
$$
\begin{array}{l}
\text { satisfy } a+b+c+d=1, \text { and } \\
\max \left\{\frac{a^{2}}{b}, \frac{b^{2}}{a}\right\} \max \left\{\frac{c^{2}}{d}, \frac{d^{2}}{c}\right\} \\
=(\min \{a+b, c+d\})^{4} .
\end{array}
$$
