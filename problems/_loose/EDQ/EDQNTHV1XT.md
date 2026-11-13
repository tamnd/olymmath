---
tag: EDQNTHV1XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1801541
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29066
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2019 Tournament Of Towns
---
Consider 2n+1 coins lying in a circle. At the beginning, all the coins are heads up. Moving clockwise, 2n+1 flips are performed: one coin is flipped, the next coin is skipped, the next coin is flipped, the next two coins are skipped, the next coin is flipped,the next three coins are skipped and so on, until finally 2n coins are skipped and the next coin is flipped.Prove that at the end of this procedure,exactly one coin is heads down.
