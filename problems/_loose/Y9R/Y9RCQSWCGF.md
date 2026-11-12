---
tag: Y9RCQSWCGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inequality with integrals. Let a continuous function $f(x)$ be defined for $0 \leqslant x \leqslant 1$, such that

$$
0<A \leqslant f(x) \leqslant B
$$

for all $x$ in the given domain. Prove that in this case

$$
A B \int_{0}^{1} \frac{d x}{f(x)} \leqslant A+B-\int_{0}^{1} f(x) d x
$$
