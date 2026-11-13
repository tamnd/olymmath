---
tag: R39FPN00PW
kind: problem
appearances:
  - at: pumac/2013/aa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563691
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10147
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose the function $\psi$ satisfies $\psi(1)=\sqrt{2+\sqrt{2+\sqrt2}}$ and $\psi(3x)+3\psi(x)=\psi(x)^3$ for all real $x$ . Determine the greatest integer less than $ \prod_{n=1}^{100}\psi(3^n)$ .
