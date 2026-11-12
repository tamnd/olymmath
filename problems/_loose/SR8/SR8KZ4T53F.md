---
tag: SR8KZ4T53F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Dima and Vasya are playing the following game. Vasya has a water tap and three pots with capacities of 3, 5, and 7 liters. Vasya needs to measure out 1 liter of water using these pots. However, there is a small catch - after every two transfers Vasya makes (filling a pot counts as a transfer, pouring out any amount of water from a pot counts as a transfer), Dima must pour out the water from one of the pots (from any non-empty pot of his choice, if all pots are empty, he does nothing). If Vasya can measure out 1 liter of water under these conditions, he wins. Can Vasya win this game despite Dima's actions? (As in all game problems, it is assumed that both sides play optimally).
