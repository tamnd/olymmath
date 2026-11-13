---
tag: Y3GNRKNZB6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h3045847
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29190
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2023 Tournament of Towns
---
There are two letter sequences $A$ and $B$ , both with length $100$ letters. In one move you can insert in any place of sequence ( possibly to start or to end) any number of same letters or remove any number of consecutive same letters.
Prove that it is possible to make second sequence from first sequence using not more than $100$ moves.
