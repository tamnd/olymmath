---
tag: WQ3PAHB7M9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207943
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x)$ be a function defined on $ [0,\ 1]$. For $ n=1,\ 2,\ 3,\ \cdots$, a polynomial $ P_n(x)$ is defined by $ P_n(x)=\sum_{k=0}^n {}_nC{}_k f\left(\frac{k}{n}\right)x^k(1-x)^{n-k}$. Prove that $ \lim_{n\to\infty} \int_0^1 P_n(x)dx=\int_0^1 f(x)dx$.
