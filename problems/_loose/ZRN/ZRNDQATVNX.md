---
tag: ZRNDQATVNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1983 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1898824
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27907
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1983 Tournament Of Towns
---
There are $K$ boys placed around a circle. Each of them has an even number of sweets. At a command each boy gives half of his sweets to the boy on his right. If, after that, any boy has an odd number of sweets, someone outside the circle gives him one more sweet to make the number even. This procedure can be repeated indefinitely. Prove that there will be a time at which all boys will have the same number of sweets.

(A Andjans, Riga)
