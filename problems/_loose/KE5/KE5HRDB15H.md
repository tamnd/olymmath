---
tag: KE5HRDB15H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the complex coefficient monic $n$-degree equation be
$$
f(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{1} x+a_{0}=0\left(a_{n} \neq 0, a_{0} \neq 0\right) \text {, }
$$
all of whose roots have a modulus less than 1. Prove that the equation
$$
g(x)=\left(a_{n}+\lambda a_{0}\right) x^{n}+\left(a_{n-1}+\lambda \bar{a}_{1}\right) x^{n-1}+\cdots+\left(a_{1}+\lambda \bar{a}_{n-1}\right) x+\left(a_{0}+\lambda \bar{a}_{n}\right)=0
$$
has all roots with a modulus equal to 1, where $|\lambda|=1$.
