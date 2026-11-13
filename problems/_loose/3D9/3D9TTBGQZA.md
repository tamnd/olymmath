---
tag: 3D9TTBGQZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3515406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49192
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=59
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2024
    source: hf-ai-mo-aops
    label: 2024 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
At each vertex of a regular $14$ -gon, lies a coin. Initially $7$ coins are heads, and $7$ coins are tails. Determine the minimum number $t$ such that it's always possible to turn over at most $t$ of the coins so that in the resulting $14$ -gon, no two adjacent coins are both heads and no two adjacent coins are both tails.
