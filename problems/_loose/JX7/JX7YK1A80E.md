---
tag: JX7YK1A80E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2330825
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38629
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235975
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/1998
    source: hf-ai-mo-aops
    label: 1998 Estonia National Olympiad
---
Thirteen children are sitting at a round table, each holding two cards. Each card has one of the numbers $1, 2, ..., 13$ written on it, and each number is written on exactly two cards. On a signal, each child gives the card with the lower number to his neighbor on the right (and at the same time receives his card with the lower number from the neighbor on the left). Prove that after a finite number of such exchanges, a situation arises when at least one of the children will have two cards with the same number.
