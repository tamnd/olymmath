---
tag: FXKSHKXEPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $a, b, c$ are non-zero complex numbers, and $\frac{a}{|a|} \neq \frac{b}{|b|}$. Prove:
$$
\begin{array}{l}
\max \{|a c+b|,|b c+a|\} \\
\geqslant \frac{1}{2}|a+b|\left|\frac{a}{|a|}-\frac{b}{|b|}\right| .
\end{array}
$$
