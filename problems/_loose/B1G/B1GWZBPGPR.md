---
tag: B1GWZBPGPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \ldots, x_{n}, a>0$ with $\sum_{i=1}^{n} x_{i}=a$. If $x_{1}=x_{n-1}$, show that:

$$
\sum_{i=1}^{n} \frac{x_{i}^{a}}{x_{i}^{2}+x_{i-1}^{2}} \geq \frac{a}{2}
$$
