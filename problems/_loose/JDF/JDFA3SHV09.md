---
tag: JDFA3SHV09
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the method of moments estimates for the unknown parameters $\alpha$ and $\beta$ of the gamma distribution from the sample $x_{1}, x_{2}, \ldots$, $x_{n}$, where the density is given by

$$
f(x)=\frac{1}{\beta^{\alpha+1 \Gamma}(\alpha+1)} x^{\alpha} e^{-x / \beta} (\alpha>-1, \beta>0, x \geqslant 0)
$$
