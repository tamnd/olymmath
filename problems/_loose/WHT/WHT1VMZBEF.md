---
tag: WHT1VMZBEF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{R} \rightarrow \mathbb{R}$ be a continuous and strictly increasing function and $\left(c_{n}\right)_{n>1}$ a bounded sequence of real numbers.

Show that $\lim _{n \rightarrow \infty} c_{n}=0$ if and only if $\lim _{n \rightarrow \infty} \int_{0}^{1} f\left(x+c_{n}\right) d x=\int_{0}^{1} f(x) d x$.
