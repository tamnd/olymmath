---
tag: 24EKKFAE2D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Taiwan National Olympiad
    url: https://artofproblemsolving.com/community/c6h80325
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61048
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Taiwan National Olympiad
---
There are 94 safes and 94 keys. Each key can open only one safe, and each safe can be opened by only one key. We place randomly one key into each safe. 92 safes are then randomly chosen, and then locked. What is the probability that we can open all the safes with the two keys in the two remaining safes?
(Once a safe is opened, the key inside the safe can be used to open another safe.)
