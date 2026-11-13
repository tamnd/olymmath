---
tag: 617A0VCTTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call $(F, c)$ a good pair if the following three conditions are satisfied:
(1) $F(x)=a_{0}+a_{1} x+\cdots a_{m} x^{m},(m \geq 1)$ is a non-constant polynomial with integer coefficients.
(2) $c$ is a real number that is not an integer.
(3) $F(c)$ is an integer.

For example, both $\left(6 x, \frac{1}{3}\right)$ and $\left(1+x^{3}, 5^{1 / 3}\right)$ are good pairs, but none of the following pairs $\left(6 x, \frac{1}{4}\right)$, $(6 x, 2),\left(\frac{x}{6}, \frac{1}{3}\right),\left(\frac{x^{2}}{6}, 6\right)$ is good.
a. Let $c=\frac{1}{2}$. Give an example of $F$ such that $(F, c)$ is a good pair but $(F, c+1)$ is not.
b. Let $c=\sqrt{2}$. Give an example of $F$ such that both $(F, c)$ and $(F, c+1)$ are good pairs.
c. Show that for any good pair $(F, c)$, if $c$ is rational then there exists infinitely many non-zero integers $n$ such that $(F, c+n)$ is also a good pair.
d. Show that if $(F, c+n)$ is a good pair for every integer $n$, then $c$ is rational.
