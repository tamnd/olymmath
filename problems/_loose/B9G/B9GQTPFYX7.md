---
tag: B9GQTPFYX7
kind: problem
type: answer
answer: \frac{2023^{2024}-1}{2022}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188352
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Q(x)=a_{2023} x^{2023}+a_{2022} x^{2022}+\cdots+a_{1} x+a_{0}$ be a polynomial with integer coefficients. For every odd prime number $p$, we define the polynomial $Q_{p}(x)=a_{2023}^{p-2} x^{2023}+a_{2022}^{p-2} x^{2022}+\cdots+a_{1}^{p-2} x+a_{0}^{p-2}$. It is known that for infinitely many odd prime numbers $p$, the expression

$$
\frac{Q_{p}(x)-Q(x)}{p}
$$

is an integer for every $x \in \mathbb{Z}$. Determine the largest possible value of $Q(2023)$.
