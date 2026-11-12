---
tag: BNHJV2RZB1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38964
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_{1}(x)=\int_{a}^{x} f(t) d x, f_{2}(x)=\int_{a}^{x} f_{1}(t) d x, \ldots, f_{n}(x)=\int_{a}^{x} f_{n-1}(t) d x$. Prove that

$$
f_{n}(x)=\frac{(-1)^{n-1}}{(n-1)!} \int_{a}^{x} f(t)(t-x)^{n-1} d t
$$
