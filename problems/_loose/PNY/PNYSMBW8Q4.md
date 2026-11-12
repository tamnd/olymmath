---
tag: PNYSMBW8Q4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{k}$ be fixed numbers and $u_{n+k}=a_{1} u_{n+k-1}+\ldots+a_{k} u_{n}$. Prove that

$$
u_{1}+u_{2} x+u_{3} x^{2}+u_{4} x^{3}+\ldots=\frac{P_{k-1}(x)}{1-a_{1} x-a_{2} x^{2}-\ldots-a_{k} x^{k}}
$$

where $P_{k-1}(x)$ is a polynomial of degree not higher than $k-1$.
