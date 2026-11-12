---
tag: 3JCX13AY3P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F=F(x)$ be a distribution function and $\varphi(t)=\int_{\mathbb{R}} e^{i t x} d F(x)$ its characteristic function. According to statement b) of Theorem 3 from V1.II. 12, the property $\int_{\mathbb{R}}|\varphi(t)| d t<\infty$ ensures the existence of a continuous density $f(x)$.

Provide an example where the distribution function $F=F(x)$ has a continuous density, but $\int_{\mathbb{R}}|\varphi(t)| d t=\infty$.
