---
tag: YCGRZYT5TJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $a, b, c$ satisfy:
$$
\begin{array}{l}
(a+b)(b+c)(c+a)=a b c, \\
\left(a^{9}+b^{9}\right)\left(b^{9}+c^{9}\right)\left(c^{9}+a^{9}\right)=(a b c)^{9} .
\end{array}
$$

Prove: $a, b, c$ at least one of them is 0.
