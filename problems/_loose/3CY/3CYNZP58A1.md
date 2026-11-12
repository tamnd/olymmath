---
tag: 3CYNZP58A1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any values of real numbers $a_{1}, a_{2}, \ldots, a_{n}$, the following inequality holds:

$$
\begin{aligned}
& \sqrt{a_{1}^{2}+\left(1-a_{2}\right)^{2}}+\sqrt{a_{2}^{2}+\left(1-a_{3}\right)^{2}}+\ldots \\
& \ldots+\sqrt{a_{n-1}^{2}+\left(1-a_{n}^{2}\right)}+\sqrt{a_{n}^{2}+\left(1-a_{1}\right)^{2}} \geqslant \frac{n \sqrt{2}}{2}
\end{aligned}
$$

For what values of these numbers is the left side of the inequality exactly equal to the right side?
