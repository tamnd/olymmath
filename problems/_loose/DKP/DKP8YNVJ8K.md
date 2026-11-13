---
tag: DKP8YNVJ8K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h486625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44144
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1997
    source: hf-ai-mo-aops
    label: 1997 Iran MO (3rd Round)
---
There are $30$ bags and there are $100$ similar coins in each bag (coins in each bag are similar, coins of different bags can be different). The weight of each coin is an one digit number in grams. We have a digital scale which can weigh at most $999$ grams in each weighing. Using this scale, we want to find the weight of coins of each bag.**(a)** Show that this operation is possible by $10$ times of weighing, and**(b)** It's not possible by $9$ times of weighing.
