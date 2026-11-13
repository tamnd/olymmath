---
tag: FVPWC5AKEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022-23 IOQM India
    url: https://artofproblemsolving.com/community/c6h2950769
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42336
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2022
    source: hf-ai-mo-aops
    label: 2022-23 IOQM India
---
Consider the $10$ -digit number $M=9876543210$ . We obtain a new $10$ -digit number from $M$ according to the following rule: we can choose one or more disjoint pairs of adjacent digits in $M$ and interchange the digits in these chosen pairs, keeping the remaining digits in their own places. For example, from $M=9\underline{87}6 \underline{54} 3210$ by interchanging the $2$ underlined pairs, and keeping the others in their places, we get $M_{1}=9786453210$ . Note that any number of (disjoint) pairs can be interchanged. Find the number of new numbers that can be so obtained from $M$ .
