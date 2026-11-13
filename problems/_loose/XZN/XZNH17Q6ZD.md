---
tag: XZNH17Q6ZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the variable $x$ have $n+1$ different values in increasing order

$$
x_{0}<x_{1}<x_{2}<\ldots x_{n-1}<x_{n}
$$

and let the values of the function $y=p x+q$ at these points be:

$y_{0}, y_{1}, y_{2}, \ldots, y_{n-1}, y_{n}$.

Prove the following equality:

$$
\left(y_{0}+y_{1}\right)\left(x_{1}-x_{0}\right)+\left(y_{1}+y_{2}\right)\left(x_{2}-x_{1}\right)+\ldots+\left(y_{n-1}+y_{n}\right)\left(x_{n}-x_{n-1}\right)=\left(y_{0}+y_{n}\right)\left(x_{n}-x_{0}\right)
$$
