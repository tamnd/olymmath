---
tag: X4AK38CZHJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178914
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(x_{n}\right)_{n \geq 1}$ defined by $x_{n+1}=x_{n}+e^{-x_{n}}, \forall \mathrm{n} \geq 1 \square \mathrm{i} x_{0} \in \mathrm{R}$.

Show that $\lim _{n \rightarrow \infty} \frac{x_{n}}{\ln n}=1$.
