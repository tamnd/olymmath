---
tag: 7602YQYDFE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's introduce the following notation:

$$
x^{(n)}=\frac{x(x-1)(x-2) \cdot \ldots \cdot(x-n+1)}{1 \cdot 2 \cdot 3 \cdot \ldots \cdot n}
$$

if $n=1,2,3, \ldots$ Prove that

a) every polynomial of degree $n$ can be written in the form

$$
b_{0}+b_{1} x^{(1)}+b_{2} x^{(2)}+\ldots+b_{n} x^{(n)}
$$

where the $b_{i}$ are real numbers $(i=0,1,2, \ldots, n)$.

b) the polynomial takes integer values at every integer point if and only if in the representation (2) every $b_{i}$ is an integer.
