---
tag: M5FHEDCAYV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c, \lambda, \mu \in \mathbf{R}_{+}$, and $a+b+c=1$. For any positive integer $m, n$ not less than 2, we have
$$
\begin{array}{l}
\frac{a^{m}+b^{n}}{\lambda b+\mu c}+\frac{b^{m}+c^{n}}{\lambda c+\mu a}+\frac{c^{m}+a^{n}}{\lambda a+\mu b} \\
\geqslant \frac{3^{2-m}+3^{2-n}}{\lambda+\mu} .
\end{array}
$$
