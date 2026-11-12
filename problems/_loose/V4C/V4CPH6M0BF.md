---
tag: V4CPH6M0BF
kind: problem
type: answer
answer: \ln\sqrt{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=46743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Based on the definition of the derivative, find $f^{\prime}(0)$:

$$
f(x)=\left\{\begin{array}{c}
\frac{2^{\operatorname{tg} x}-2^{\sin x}}{x^{2}}, x \neq 0 \\
0, x=0
\end{array}\right.
$$
