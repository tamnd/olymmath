---
tag: 67APMKNWKS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36935
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of the numbers $x_{0}, x_{1}, \ldots, x_{n}$ is equal to 0 or 1. Prove that

$$
\begin{aligned}
& x_{0}+\frac{x_{1}}{\sqrt{2}}+\frac{x_{2}}{(\sqrt{2})^{2}}+\ldots+\frac{x_{n}}{(\sqrt{2})^{n}} \leqslant \\
& \leqslant(1+\sqrt{2}) \sqrt{x_{0}+\frac{x_{1}}{2}+\ldots+\frac{x_{n}}{2^{n}}}
\end{aligned}
$$
