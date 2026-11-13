---
tag: 3CPZWMZXNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Armadillo and Badger are playing a game. Armadillo chooses a nonempty tree (a simple acyclic graph) and places apples at some of its vertices (there may be several apples on a single vertex). First, Badger picks a vertex $v_0$ and eats all its apples. Next, Armadillo and Badger take turns alternatingly, with Armadillo starting. On the $i$-th turn the animal whose turn it is picks a vertex $v_i$ adjacent to $v_{i-1}$ that hasn't been picked before and eats all its apples. The game ends when there is no such vertex $v_i$.

Armadillo's goal is to have eaten more apples than Badger once the game ends. Can she fulfill her wish?
