---
tag: CD8ZR1WP27
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h1113642
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13226
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2015
    source: hf-ai-mo-aops
    label: 2015 Taiwan TST Round 3
---
For any positive integer $n$ , let $a_n=\sum_{k=1}^{\infty}[\frac{n+2^{k-1}}{2^k}]$ , where $[x]$ is the largest integer that is equal or less than $x$ . Determine the value of $a_{2015}$ .
