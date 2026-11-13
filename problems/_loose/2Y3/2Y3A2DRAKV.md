---
tag: 2Y3A2DRAKV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2020
    url: https://artofproblemsolving.com/community/c6h3036838
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57234
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2020
    source: hf-ai-mo-aops
    label: Russian TST 2020
---
There are coins worth $1, 2, \ldots , b$ rubles, blue bills with worth $a{}$ rubles and red bills worth $a + b$ rubles. Ilya wants to exchange a certain amount into coins and blue bills, and use no more than $a-1$ coins. Pasha wants to exchange the same amount in coins and red bills, but use no more than $a{}$ coins. Prove that they have equally many ways of doing so.
