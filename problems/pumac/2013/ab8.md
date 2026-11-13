---
tag: 5HZXY772NA
kind: problem
appearances:
  - at: pumac/2013/ab8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_AlgebraB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563693
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10149
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $x,y$ are real, then the $\textit{absolute value}$ of the complex number $z=x+yi$ is $$|z|=\sqrt{x^2+y^2}.$$ Find the number of polynomials $f(t)=A_0+A_1t+A_2t^2+A_3t^3+t^4$ such that $A_0,\ldots,A_3$ are integers and all roots of $f$ in the complex plane have absolute value $\leq 1$ .
