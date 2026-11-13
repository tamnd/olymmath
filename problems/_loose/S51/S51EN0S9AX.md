---
tag: S51EN0S9AX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h198296
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35923
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2008
    source: hf-ai-mo-aops
    label: 2008 China Team Selection Test
---
Let $ n>m>1$ be odd integers, let $ f(x)=x^n+x^m+x+1$ . Prove that $ f(x)$ can't be expressed as the product of two polynomials having integer coefficients and positive degrees.
