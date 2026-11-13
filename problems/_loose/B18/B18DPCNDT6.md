---
tag: B18DPCNDT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1532561
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16553
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2018
    source: hf-ai-mo-aops
    label: 2018 Hong Kong TST
---
There are three piles of coins, with $a,b$ and $c$ coins respectively, where $a,b,c\geq2015$ are positive integers. The following operations are allowed:

(1) Choose a pile with an even number of coins and remove all coins from this pile. Add coins to each of the remaining two piles with amount equal to half of that removed; or

(2) Choose a pile with an odd number of coins and at least 2017 coins. Remove 2017 coins from this pile. Add 1009 coins to each of the remaining two piles.

Suppose there are sufficiently many spare coins. Find all ordered triples $(a,b,c)$ such that after some finite sequence of allowed operations. There exists a pile with at least $2017^{2017}$ coins.
