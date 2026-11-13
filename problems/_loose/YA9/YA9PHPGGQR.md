---
tag: YA9PHPGGQR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bulgarian Spring Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h3039500
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204268
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-spring/2023
    source: hf-ai-mo-aops
    label: 2023 Bulgarian Spring Mathematical Competition
---
Given is a polynomial $f$ of degree $m$ with integer coefficients and positive leading coefficient. A positive integer $n$ is $\textit {good for f(x)}$ if there exists a positive integer $k_n$ , such that $n!+1=f(n)^{k_n}$ . Prove that there exist only finitely many integers good for $f$ .
