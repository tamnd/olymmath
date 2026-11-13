---
tag: SXP4K3DHH7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1998886
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2020
    source: hf-ai-mo-aops
    label: 2020 CMIMC Team
---
Given $n=2020$ , sort the $6$ values $$ n^{n^2},\, 2^{2^{2^n}},\, n^{2^n},\, 2^{2^{n^2}},\, 2^{n^n},\,\,\text{and}\, 2^{n^{2^2}} $$ from **least** to **greatest**. Give your answer as a 6 digit permutation of the string "123456", where the number $i$ corresponds to the $i$ -th expression in the list, from left to right.
