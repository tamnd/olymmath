---
tag: SFMFF7B704
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob decide to determine a 2018-digit number in the decimal system digit by digit from left to right, with Alice starting and the two taking turns. The following rule must be observed: Each newly named digit must lie in a different residue class modulo 3 than the one immediately before it.

Since Bob gets to specify the last digit, he bets that he can make the number divisible by 3 at the end. Can Alice prevent this?

(Richard Henner)
