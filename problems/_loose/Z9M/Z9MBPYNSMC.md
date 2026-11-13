---
tag: Z9MBPYNSMC
kind: problem
type: answer
answer: k\leqslant2\sqrt{2}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the functions
$$
f(x)=x+\frac{a}{x}-4, g(x)=k x+3 .
$$

When $a \in[1,2]$, if the inequality
$$
\left|f\left(x_{1}\right)\right|-\left|f\left(x_{2}\right)\right|<g\left(x_{1}\right)-g\left(x_{2}\right)
$$

holds for any $x_{1}, x_{2} \in[2,4]\left(x_{1}<x_{2}\right)$, find the range of the real number $k$.
