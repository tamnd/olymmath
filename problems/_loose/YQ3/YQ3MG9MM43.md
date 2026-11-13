---
tag: YQ3MG9MM43
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2627578
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 1
---
There are $110$ guinea pigs for each of the $110$ species, arranging as a $110\times 110$ array. Find the maximum integer $n$ such that, no matter how the guinea pigs align, we can always find a column or a row of $110$ guinea pigs containing at least $n$ different species.
