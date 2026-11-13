---
tag: ANTK1H50EP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(F_{n}\right)_{n \in \mathbb{N}}$ be the Fibonacci sequence defined by $F_{0}=0, F_{1}=1$ and, for all $n \in \mathbb{N}$, $F_{n+2}=F_{n+1}+F_{n}$.

Let $\varphi=\frac{1+\sqrt{5}}{2}, \psi=\frac{1-\sqrt{5}}{2}$. We can observe that $\varphi^{2}=\varphi+1$ and $\psi^{2}=\psi+1$.

Show that, for all $n \in \mathbb{N}, F_{n}=\frac{\varphi^{n}-\psi^{n}}{\sqrt{5}}$.
