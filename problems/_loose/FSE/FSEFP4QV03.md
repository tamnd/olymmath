---
tag: FSEFP4QV03
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038278
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29030
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2013 Tournament of Towns
---
The number $1- \frac12 +\frac13-\frac14+...+\frac{1}{2n-1}-\frac{1}{2n}$ is represented as an irreducible fraction. If $3n+1$ is a prime number, prove that the numerator of this fraction is a multiple of $3n + 1$ .
