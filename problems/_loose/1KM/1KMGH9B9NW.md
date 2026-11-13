---
tag: 1KMGH9B9NW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h603021
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22229
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2005
    source: hf-ai-mo-aops
    label: 2005 Cono Sur Olympiad
---
The monetary unit of a certain country is called Reo, and all the coins circulating are integers values of Reos. In a group of three people, each one has 60 Reos in coins (but we don't know what kind of coins each one has). Each of the three people can pay each other any integer value between 1 and 15 Reos, including, perhaps with change. Show that the three persons together can pay exactly (without change) any integer value between 45 and 135 Reos, inclusive.
