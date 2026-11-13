---
tag: WPG620PQRH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game for two.
One gives a digit and the second substitutes it instead of a star in the following difference:
$**** - **** = $
Then the first gives the next digit, and so on $8$ times.
The first wants to obtain the greatest possible difference, the second -- the least. Prove that:
1. The first can operate in such a way that the difference would be not less than $4000$, not depending on the second's behaviour.
2. The second can operate in such a way that the difference would be not greater than $4000$, not depending on the first's behaviour.
