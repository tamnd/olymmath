---
tag: 1YAWAPW5J3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a football tournament, $n$ teams play one round ($n$ is even). In each round should play $n / 2$ pairs of teams that have not yet played. Schedule of each round takes place before its holding. For which smallest natural $k$ such that the following situation is possible:
after $k$ tours, making a schedule of $k + 1$ rounds already is not possible,
i.e. these $n$ teams cannot be divided into $n / 2$ pairs, in each of which there are teams that have not played in the previous $k$ rounds.
