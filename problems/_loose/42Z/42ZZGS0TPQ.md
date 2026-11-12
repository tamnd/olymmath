---
tag: 42ZZGS0TPQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h1763846
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
Consider a $2 \times n$ grid where each cell is either black or white, which we attempt to tile with $2 \times 1$ black or white tiles such that tiles have to match the colors of the cells they cover. We first randomly select a random positive integer $N$ where $N$ takes the value $n$ with probability $\frac{1}{2^n}$ . We then take a $2 \times N$ grid and randomly color each cell black or white independently with equal probability. Compute the probability the resulting grid has a valid tiling.
