---
tag: WFERTM8PKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2477851
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28064
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1988 Tournament Of Towns
---
The integers $1 , 2,..., n$ are rearranged in such a way that if the integer $k, 1 \le k\le n$ , is not the first term, then one of the integers $k + 1$ or $k-1$ occurs to the left of $k$ . How many arrangements of the integers $1 , 2,..., n$ satisfy this condition?

(A. Andjans, Riga)
