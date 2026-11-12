---
tag: 6X0XRM0VXZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a field. Prove that a polynomial $f(x)$ with coefficients from $k$ has a factorization into irreducible factors, and this factorization is unique.

For the ring of integers, the irreducibility of polynomials is defined in the same way as in the case of a field, i.e., a polynomial $f(x)$ with integer coefficients is irreducible over the ring of integers if it cannot be represented as a product of polynomials of positive degree with integer coefficients. However, in the case of the ring of integers, it is not always possible to divide the coefficients of the polynomial by the leading coefficient; one can only divide the coefficients by the greatest common divisor of all the coefficients. This leads to the following definition. Let $f(x)=\sum a_{i} x^{i}$, where $a_{i}$ are integers. The greatest common divisor of the coefficients $a_{0}, \ldots, a_{n}$ is called the content of the polynomial $f$. The content of the polynomial $f$ is denoted by $\operatorname{cont}(f)$. Clearly, $f(x)=\operatorname{cont}(f) g(x)$, where $g$ is a polynomial with integer coefficients and content 1.
