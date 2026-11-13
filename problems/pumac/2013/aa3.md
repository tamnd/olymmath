---
tag: VSQTN17DSD
kind: problem
appearances:
  - at: pumac/2013/aa3
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
    url: https://artofproblemsolving.com/community/c6h563688
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10144
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1=\sqrt{10}$ and $y_1=\sqrt3$ . For all $n\geq 2$ , let \begin{align*}x_n&=x_{n-1}\sqrt{77}+15y_{n-1}y_n&=5x_{n-1}+y_{n-1}\sqrt{77}\end{align*} Find $x_5^6+2x_5^4-9x_5^4y_5^2-12x_5^2y_5^2+27x_5^2y_5^4+18y_5^4-27y_5^6.$
