---
tag: 9MEHVVVSXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The city represents an infinite grid plane (lines - streets, cells - blocks). On one street, there is a police officer at every intersection, 100 blocks apart. Somewhere in the city, there is a bandit (his location is unknown, but he only moves along the streets). The goal of the police is to see the bandit. Is there a way (algorithm) for the police to definitely achieve their goal? (The maximum speeds of the police and the bandit are some finite but unknown values, and the police can see along the streets in all directions to an infinite distance.)
