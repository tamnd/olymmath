---
tag: YNVF1ZET81
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250733
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=2
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{x_n\}$ be a sequence defined by $x_1 = 2$ and $x_{n+1} = x_n^2 - x_n + 1$ for $n \ge 1$. Prove that
$$1 -\frac{1}{2^{2^{n-1}}} < \frac{1}{x_1}+\frac{1}{x_2}+ ... +\frac{1}{x_n}< 1 -\frac{1}{2^{2^n}}$$
for all $n$
