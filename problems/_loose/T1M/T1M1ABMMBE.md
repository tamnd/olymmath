---
tag: T1M1ABMMBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bulgaria EGMO TST
    url: https://artofproblemsolving.com/community/c6h3008154
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32929
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231976
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-egmo-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Bulgaria EGMO TST
---
In a qualification football round there are six teams and each two play one versus another exactly once. No two matches are played at the same time. At every moment the difference between the number of already played matches for any two teams is $0$ or $1$ . A win is worth $3$ points, a draw is worth $1$ point and a loss is worth $0$ points. Determine the smallest positive integer $n$ for which it is possible that after the $n$ -th match all teams have a different number of points and each team has a non-zero number of points.
