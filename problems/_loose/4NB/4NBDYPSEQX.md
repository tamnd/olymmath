---
tag: 4NBDYPSEQX
kind: problem
type: answer
answer: p+q=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the equation

$$
x^{2}+p x+q=0
$$

which has roots $x_{1}$ and $x_{2}$. Determine the coefficients $r$ and $s$ as functions of $p$ and $q$ such that the equation

$$
y^{2}+r y+s=0
$$

has roots $y_{1}$ and $y_{2}$ which are related to the roots $x_{1}$ and $x_{2}$ by

$$
y_{1}=\frac{x_{1}}{x_{1}-1} \text { and } y_{2}=\frac{x_{2}}{x_{2}-1}
$$

What relationship must hold between $p$ and $q$ for equations (1) and (2) to be identical?
