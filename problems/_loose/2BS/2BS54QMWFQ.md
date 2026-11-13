---
tag: 2BS54QMWFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1] \rightarrow \mathbb{R}$ be an integrable function with $\int_{0}^{1} f(x) \mathrm{d} x=0$. If $g:[0,1] \rightarrow \mathbb{R}$ is a differentiable function with an integrable derivative, prove that the following inequality holds:

$$
2 \int_{0}^{1} f(x) g(x) d x \leq \int_{0}^{1}|f(x)| d x \cdot \int_{0}^{1}\left|g^{\prime}(x)\right| d x
$$

Ion Bursuc
