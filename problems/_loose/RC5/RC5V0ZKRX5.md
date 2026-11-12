---
tag: RC5V0ZKRX5
kind: problem
type: answer
answer: y^{3}+2^{2}+(^{2}-4)y-b^{2}=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, x_{3}, x_{4}$ be the roots of the equation $x^{4} + a x^{2} + b x + c = 0$. Let $\alpha = -\left(x_{1} + x_{2}\right)\left(x_{3} + x_{4}\right)$, $\beta = -\left(x_{1} + x_{3}\right) \times\left(x_{2} + x_{4}\right)$, and $\gamma = -\left(x_{1} + x_{4}\right)\left(x_{2} + x_{3}\right)$.

a) Express $x_{1}, x_{2}, x_{3}$, and $x_{4}$ in terms of $\sqrt{\alpha}, \sqrt{\beta}$, and $\sqrt{\gamma}$.

b) Express the coefficients of the polynomial $(y-\alpha)(y-\beta)(y-\gamma)$ in terms of $a, b, c$.

c) Reduce the solution of the equation $x^{4} + a x^{2} + b x + c = 0$ to the solution of a cubic equation.
