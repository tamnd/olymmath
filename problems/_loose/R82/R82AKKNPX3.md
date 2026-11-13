---
tag: R82AKKNPX3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an $n$-degree polynomial with real coefficients

$$
p(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\cdots+a_{1}+a_{0}
$$

where all roots (real and complex) lie in the left half-plane, meaning their real part is negative. Prove that for any $0 \leq k \leq n-3$,

$$
a_{k} a_{k+3}<a_{k+1} a_{k+2}
$$

IMC 10, Cluj-Napoca, 2003
