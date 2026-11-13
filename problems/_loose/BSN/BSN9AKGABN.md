---
tag: BSN9AKGABN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h536001
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9975
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Richard has a four infinitely large piles of coins: a pile of pennies (worth 1 cent each), a pile of nickels (5 cents), a pile of dimes (10 cents), and a pile of quarters (25 cents). He chooses one pile at random and takes one coin from that pile. Richard then repeats this process until the sum of the values of the coins he has taken is an integer number of dollars. (One dollar is 100 cents.) What is the expected value of this final sum of money, in cents?

*Proposed by Lewis Chen*
