---
tag: G26YK2KFXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)_{n \geqslant 1}$ be the sequence of real numbers satisfying $x_{1}=\sqrt{2}$ and for all integers $k \geqslant 1$, $x_{k+1}=x_{k}+\frac{1}{x_{k}}$. Show that

$$
\frac{x_{1}^{2}}{2 x_{1} x_{2}-1}+\frac{x_{2}^{2}}{2 x_{2} x_{3}-1}+\ldots+\frac{x_{2020}^{2}}{2 x_{2020} x_{2021}-1}+\frac{x_{2021}^{2}}{2 x_{2021} x_{2022}-1}>\frac{2021^{2}}{x_{2021}^{2}+\frac{1}{x_{2021}^{2}}}
$$
