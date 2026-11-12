---
tag: EWCW80T86V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h535413
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9077
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=17771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2013
    source: hf-ai-mo-aops
    label: 2013 All-Russian Olympiad
---
Let $P(x)$ and $Q(x)$ be (monic) polynomials with real coefficients (the first coefficient being equal to $1$ ), and $\deg P(x)=\deg Q(x)=10$ . Prove that if the equation $P(x)=Q(x)$ has no real solutions, then $ P(x+1)=Q(x-1) $ has a real solution.
