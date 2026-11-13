---
tag: D20P3PHFBA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h1831665
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17214
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2019
    source: hf-ai-mo-aops
    label: 2019 All-Russian Olympiad
---
We are given $n$ coins of different weights and $n$ balances, $n>2$ . On each turn one can choose one balance, put one coin on the right pan and one on the left pan, and then delete these coins out of the balance. It's known that one balance is wrong (but it's not known ehich exactly), and it shows an arbitrary result on every turn. What is the smallest number of turns required to find the heaviest coin?
