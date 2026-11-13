---
tag: 8E8RT9CMN5
kind: problem
appearances:
  - at: pumac/2021/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2834932
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73325
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a polynomial $p$ is respectful if $\forall x, y \in Z$ , $y - x$ divides $p(y) - p(x)$ , and $\forall x \in Z$ , $p(x) \in Z$ . We say that a respectful polynomial is disguising if it is nonzero, and all of its non-zero coefficients lie between $0$ and $ 1$ , exclusive. Determine $\sum deg(f)\cdot f(2)$ , where the sum includes all disguising polynomials $f$ of degree at most $5$ .
