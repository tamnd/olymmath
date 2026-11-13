---
tag: VNNWBDVHVB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h217755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38776
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Estonia National Olympiad
---
Find all pairs of positive integers $ (a, b)$ such that
$$ ab = gcd(a, b) + lcm(a, b).
$$
