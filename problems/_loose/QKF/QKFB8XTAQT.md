---
tag: QKFB8XTAQT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h365210
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28899
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
Let $P(x)$ be a polynomial with real coefficients so that equation $P(m) + P(n) = 0$ has infinitely many pairs of integer solutions $(m,n)$ . Prove that graph of $y = P(x)$ has a center of symmetry.
