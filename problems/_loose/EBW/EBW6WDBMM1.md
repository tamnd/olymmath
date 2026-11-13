---
tag: EBW6WDBMM1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(x)$ be a polynomial. Denote

$$
p^{n}(x)=\underbrace{p(p(\cdots p}_{n}(x) \cdots))
$$

Prove that the polynomial $p^{2003}(x)-2 p^{2002}(x)+p^{2001}(x)$ is divisible by $p(x)-x$.
