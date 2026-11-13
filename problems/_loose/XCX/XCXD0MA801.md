---
tag: XCXD0MA801
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=5528
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2019
    source: hf-numina-olympiads
    label: HMMT February
  - at: hmmt/2019
    source: hf-mathnet
    label: United States HMMT February 2019
---
Let $S, P, A, C, E$ be (not necessarily distinct) decimal digits where $E \neq 0$. Given that $N=\sqrt{\overline{E S C A P E}}$ is a positive integer, find the minimum possible value of $N$.
