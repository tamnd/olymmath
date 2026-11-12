---
tag: PGYDS17EZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, x_{3}$ be the roots of the equation $x^{3} + p x + q = 0$. Let $\alpha = x_{1} + \omega x_{2} + \omega^{2} x_{3}$ and $\beta = x_{1} + \omega^{2} x_{2} + \omega x_{3}$, where $\omega^{2} + \omega + 1 = 0$ (these expressions are called Lagrange resolvents).

a) Prove that $3 x_{1} = \alpha + \beta$, $3 x_{2} = \omega^{2} \alpha + \omega \beta$, and $3 x_{3} = \omega \alpha + \omega^{2} \beta$.

b) Express $\alpha \beta$ and $\alpha^{3} + \beta^{3}$ in terms of $p$ and $q$.

c) Solve the equation $x^{3} + p x + q = 0$.
