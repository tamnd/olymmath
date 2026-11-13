---
tag: MGTQH3C1E0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Romania TST for IMO
    url: https://artofproblemsolving.com/community/c6h293279
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247898
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1994
    source: hf-ai-mo-aops
    label: 1994 Romania TST for IMO
---
Let $ n$ be an odd positive integer. Prove that $((n-1)^n+1)^2$ divides $ n(n-1)^{(n-1)^n+1}+n$ .
