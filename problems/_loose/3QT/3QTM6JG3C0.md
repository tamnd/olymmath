---
tag: 3QTM6JG3C0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h598541
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61180
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2014
    source: hf-ai-mo-aops
    label: 2014 Taiwan TST Round 3
---
Alice and Bob play the following game. They alternate selecting distinct nonzero digits (from $1$ to $9$ ) until they have chosen seven such digits, and then consider the resulting seven-digit number by concatenating the digits in the order selected, with the seventh digit appearing last (i.e. $\overline{A_1B_2A_3B_4A_6B_6A_7}$ ). Alice wins if and only if the resulting number is the last seven decimal digits of some perfect seventh power. Please determine which player has the winning strategy.
