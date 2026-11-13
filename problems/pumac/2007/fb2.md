---
tag: AHEAXG0SBV
kind: problem
appearances:
  - at: pumac/2007/fb2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h506122
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73133
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $A$ is a set of positive integers less than $N$ and that no two distinct elements of $A$ sum to a perfect square. That is, if $a_1, a_2 \in A$ and $a_1 \neq a_2$ then $|a_1+a_2|$ is not a square of an integer. Prove that the maximum number of elements in $A$ is at least $\left\lfloor\frac{11}{32}N\right\rfloor$ .
