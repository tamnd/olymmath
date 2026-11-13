---
tag: D5DC5DHQXF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90451
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for sufficiently large primes $p$, there is an Eulerian circuit on the complete graph with $p$ vertices that does not contain any cycles of length at most 2023.
