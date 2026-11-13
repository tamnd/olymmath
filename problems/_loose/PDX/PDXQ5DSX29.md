---
tag: PDXQ5DSX29
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h3047605
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1199
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 2
---
Integers $n$ and $k$ satisfy $n > 2023k^3$ . Kingdom Kitty has $n$ cities, with at most one road between each pair of cities. It is known that the total number of roads in the kingdom is at least $2n^{3/2}$ . Prove that we can choose $3k + 1$ cities such that the total number of roads with both ends being a chosen city is at least $4k$ .
