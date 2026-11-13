---
tag: RZ1C0QM0G1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2038160
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28947
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228957
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
Prove that the integer $1^1 + 3^3 + 5^5 + .. + (2^n - 1)^{2^n-1}$ is a multiple of $2^n$ but not a multiple of $2^{n+1}$ .
