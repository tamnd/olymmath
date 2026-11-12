---
tag: 64N0SSPESB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1955 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1898923
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56803
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1955
    source: hf-ai-mo-aops
    label: 1955 Moscow Mathematical Olympiad
---
Prove that if $\frac{p}{q}$ is an irreducible rational number that serves as a root of the polynomial $f(x) = a_0x^n + a_1x^{n-1} + ... + a_n$ with integer coefficients, then $p - kq$ is a divisor of $f(k)$ for any integer $k$ .
