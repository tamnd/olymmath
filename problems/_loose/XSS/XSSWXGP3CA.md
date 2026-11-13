---
tag: XSSWXGP3CA
kind: problem
type: answer
answer: F_{T}(x,z)=(1-xz)(1-2xz+z^{2})^{-1},\quadF_{U}(x,z)=(1-2xz+z^{2})^{-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the generating functions of the sequences of Chebyshev polynomials of the first and second kind:

$$
F_{T}(x, z)=\sum_{n=0}^{\infty} T_{n}(x) z^{n} ; F_{U}(x, z)=\sum_{n=0}^{\infty} U_{n}(x) z^{n}
$$

Definitions of Chebyshev polynomials can be found in the reference manual.
