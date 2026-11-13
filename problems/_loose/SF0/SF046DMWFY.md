---
tag: SF046DMWFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791497
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=174
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
In a class of $12$ students, no two people are the same height. Compute the total number of ways for the students to arrange themselves in a line such that:

- for all $1 < i < 12$ , the person in the $i$ -th position (with the leftmost position being $1$ ) is taller than exactly $i\pmod 3$ of their adjacent neighbors, and
- the students standing at positions which are multiples of $3$ are strictly increasing in height from left to right.

*Proposed by Nancy Kuang*
