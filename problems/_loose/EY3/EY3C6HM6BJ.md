---
tag: EY3C6HM6BJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two functions (all variables and coefficients are real)

$$
f(x)=x^{4}+a_{3} x^{3}+a_{2} x^{2}+a_{1} x+a_{0}, g(x)=x^{4}+b_{3} x^{3}+b_{2} x^{2}+b_{1} x+b_{0}
$$

It is known that the equality $f(x)=g(x)$ does not hold for any value of $x$. Prove that the equality $f(x+1)=g(x-1)$ holds for at least one value of the variable $x$.
