---
tag: 2M5VXQGJB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $a_{0}, a_{1}, \cdots$ satisfies $a_{i-1}+a_{i+1}=2 a_{i}(i=1,2, \cdots)$. Prove: For any natural number $n$ and $r, P(x)=a_{0}^{r} C_{n}^{0}(1-x)^{n}+a_{1}^{r} C_{n}^{1} x(1-x)^{n-1}+a_{2}^{r} C_{n}^{2} x^{2}(1-x)^{n-2}+\cdots+$ $C_{n-1}^{r} x^{n-1}(1-x)+a_{n}^{\prime} C_{n}^{n} x^{n}$ is a polynomial in $x$ of degree not exceeding $r$ or the zero polynomial.
(1986 National High School League Problem Generalization)
