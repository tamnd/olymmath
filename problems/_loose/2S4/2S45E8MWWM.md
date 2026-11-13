---
tag: 2S45E8MWWM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2021
    url: https://artofproblemsolving.com/community/c6h3017314
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26587
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2021
    source: hf-ai-mo-aops
    label: Kvant 2021
---
In a room there are several children and a pile of 1000 sweets. The children come to the pile one after another in some order. Upon reaching the pile each of them divides the current number of sweets in the pile by the number of children in the room, rounds the result if it is not integer, takes the resulting number of sweets from the pile and leaves the room. All the boys round upwards and all the girls round downwards. The process continues until everyone leaves the room. Prove that the total number of sweets received by the boys does not depend on the order in which the children reach the pile.

*Maxim Didin*
