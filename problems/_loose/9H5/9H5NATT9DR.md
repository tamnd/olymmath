---
tag: 9H5NATT9DR
kind: problem
type: answer
answer: M(Z)=3,\,D(Z)=0.52
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
As a result of processing data from long-term observations, distributions of random variables $X$ and $Y$ have been obtained - the number of households in each of two districts of the region where the yield of spring cereals can exceed 35 centners/ha.

For the first district of the region:

$$
X: \begin{array}{cccc}
x_{i} & 1 & 2 & 3 \\
p\left(x_{i}\right) & 0.1 & 0.6 & 0.3
\end{array}
$$

For the second district of the region:

$$
Y: \begin{array}{ccc}
y_{j} & 0 & 1 \\
p\left(y_{j}\right) & 0.2 & 0.8
\end{array}
$$

Find the mathematical expectation $M(Z)$ and variance $D(Z)$ of the random variable $Z=X+Y$ in two ways:

a) based on the distribution law of $Z$;

b) using the properties of mathematical expectation and variance reflected in formulas (33) and (42).

Verify that in the conditions of this problem, these properties of numerical characteristics of independent random variables are satisfied.
