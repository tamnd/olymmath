---
tag: 37CZ57QJTN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3313173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1084
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Romania Team Selection Test
  - at: balkan-sl/2023
    source: hf-mathnet
    label: Balkan Mathematical Olympiad BMO 2023 Short List
---
In a given community of people, each person has at least two friends within the community. Whenever some people from this community sit on a round table such that each adjacent pair of people are friends, it happens that no non-adjacent pair of people are friends. Prove that there exist two people in this community such that each has exactly two friends and they have at least one common friend.
