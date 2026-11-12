---
tag: QA20WJKMSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26038
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a plane, there are 2005 points (no three of which lie on the same line). Each pair of points is connected by a segment. Tiger and Donkey play the following game. Donkey marks each segment with one of the digits, and then Tiger marks each point with one of the digits. Donkey wins if there are two points marked with the same digit as the segment connecting them, and loses otherwise. Prove that with the correct play, Donkey will win.
