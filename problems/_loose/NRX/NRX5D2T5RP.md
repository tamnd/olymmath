---
tag: NRX5D2T5RP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $x_{n}$ is defined as follows:

$$
\begin{aligned}
x_{1}=2 \\
x_{n+1}=x_{n}^{2}+x_{n} ; \text { if } n \geq 1
\end{aligned}
$$

Furthermore, let $y_{n}=\frac{1}{1+x_{n}}$, and let $A_{n}$ denote the sum $y_{1}+y_{2}+\ldots+y_{n}$, and $B_{n}$ denote the product $y_{1} \cdot y_{2} \cdot \ldots y_{n}$. Prove that $2 A_{n}+B_{n}=1$ for all $n \geq 1$.
