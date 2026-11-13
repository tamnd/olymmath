---
tag: 9RNDMR8PJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426106
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73920
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
The expression $16^n+4^n+1$ is equiavalent to the expression $(2^{p(n)}-1)/(2^{q(n)}-1)$ for all positive integers $n>1$ where $p(n)$ and $q(n)$ are functions and $\tfrac{p(n)}{q(n)}$ is constant. Find $p(2006)-q(2006)$ .
