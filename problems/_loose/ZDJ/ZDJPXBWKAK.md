---
tag: ZDJPXBWKAK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2096443
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2000 Tournament Of Towns
---
Each $1 \times 1$ square of an $n \times n$ table contains a different number. The smallest number in each row is marked, and these marked numbers are in different columns. Then the smallest number in each column is marked, and these marked numbers are in different rows. Prove that the two sets of marked numbers are identical.

(V Klepcyn)
