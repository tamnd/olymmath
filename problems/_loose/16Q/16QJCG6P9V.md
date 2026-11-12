---
tag: 16QJCG6P9V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for any $\lambda>0$ the Boolean transformation

$$
x \rightarrow x-\frac{\lambda}{x} (x \neq 0)
$$

preserves the Lebesgue measure on $\mathbb{R}$, i.e., for any integrable function $f$ on $\mathbb{R}$, the following equality holds:

$$
\int_{\mathbb{R}} f(x) d x=\int_{\mathbb{R}} f\left(x-\frac{\lambda}{x}\right) d x
$$
