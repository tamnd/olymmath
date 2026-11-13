---
tag: M1D6QYXF8F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a foreign island $5781$ sheep are sacrificed every year for the two deities of the island, Alice and Bob. Every deity wants as many sheep as he can to be sacrificed for him, and not for the other deity. Initially all $5781$ sheep are arranged around a circle with equal distances. At the first step, Alice puts one magic stone between several pairs of neighboring sheep, so that the total number of magic stones is odd. After that, Bob sacrifices one of the sheep for himself and replaces it by a food bucket. At the third step, Alice chooses a pair of neighboring sheep (not including the two which are separated by the bucket) and puts a border between them (the border may be at the same place as a magic stone). After that, all remaining sheep walk through an arc of the circle to the food bucket without crossing the border (so that there is only one possible route). Every sheep which walks on an odd number of magic stones is sacrificed for Alice, and every other sheep is for Bob. What is the maximal number of sheep which Alice can sacrifice for herself in a certain year, regardless of Bob's action?
