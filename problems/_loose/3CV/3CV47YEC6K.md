---
tag: 3CV47YEC6K
kind: problem
type: answer
answer: n = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider (3-variable) polynomials
$$P_n(x,y,z)=(x-y)^{2n}(y-z)^{2n}+(y-z)^{2n}(z-x)^{2n}+(z-x)^{2n}(x-y)^{2n}$$
and
$$Q_n(x,y,z)=[(x-y)^{2n}+(y-z)^{2n}+(z-x)^{2n}]^{2n}.$$
Determine all positive integers $n$ such that the quotient $Q_n(x,y,z)/P_n(x,y,z)$ is a (3-variable) polynomial with rational coefficients.
