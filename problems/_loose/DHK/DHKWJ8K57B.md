---
tag: DHKWJ8K57B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the coefficients of the substitution

$$
\begin{aligned}
& x=\alpha x^{\prime}+\beta y^{\prime}+\gamma \\
& y=x^{\prime}+\beta^{\prime} y^{\prime}+\gamma^{\prime}
\end{aligned}
$$

which transforms the equation

$$
A x^{2}+2 B x y+C x^{2}+2 D x+2 E y+F=0
$$

into the form

$$
\frac{x^{\prime 2}}{a^{2}} \pm \frac{y^{\prime 2}}{b^{2}}-1=0
$$
