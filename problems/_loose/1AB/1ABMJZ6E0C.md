---
tag: 1ABMJZ6E0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097807
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28455
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1998 Tournament Of Towns
---
A gang of robbers took away a bag of coins from a merchant . Each coin is worth an integer number of pennies. It is known that if any single coin is removed from the bag, then the remaining coins can be divided fairly among the robbers (that is, they all get coins with the same total value in pennies) . Prove that after one coin is removed, the number of the remaining coins is divisible by the number of robbers.

(Folklore, modified by A Shapovalov)
