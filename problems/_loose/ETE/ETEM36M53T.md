---
tag: ETEM36M53T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 France Team Selection Test
    url: https://artofproblemsolving.com/community/c6h491799
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7892
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2012
    source: hf-ai-mo-aops
    label: 2012 France Team Selection Test
---
Let $p$ be a prime number. Find all positive integers $a,b,c\ge 1$ such that:
$$a^p+b^p=p^c.$$
