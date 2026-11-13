---
tag: RP3WVMDGPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1882702
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55372
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248739
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1982
    source: hf-ai-mo-aops
    label: 1982 All Soviet Union Mathematical Olympiad
---
The square table $n\times n$ is filled by integers. If the fields have common side, the difference of numbers in them doesn't exceed $1$ . Prove that some number is encountered not less than

a) not less than $[n/2]$ times ( $[ ...]$ mean the whole part),

b) not less than $n$ times.
