---
tag: KJ3QT7PD68
kind: problem
appearances:
  - at: pumac/2009/ab1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2009 official paper
    url: https://pumac.princeton.edu/s/PUMaC2009_AlgebraB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427708
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3942
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $\phi$ is the Golden Ratio, we know that $\frac1\phi = \phi - 1$ . Define a new positive real number, called $\phi_d$ , where $\frac1{\phi_d} = \phi_d - d$ (so $\phi = \phi_1$ ). Given that $\phi_{2009} = \frac{a + \sqrt{b}}{c}$ , $a, b, c$ positive integers, and the greatest common divisor of $a$ and $c$ is 1, find $a + b + c$ .
