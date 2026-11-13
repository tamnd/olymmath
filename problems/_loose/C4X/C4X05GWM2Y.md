---
tag: C4X05GWM2Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90763
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A number is called cool if it is the sum of two nonnegative perfect squares. For example the numbers 17 and 25 are cool because $17=4^{2}+1^{2}$ and $25=5^{2}+0^{2}$, but the number 15 is not cool.

Show that if $k$ is cool, then $2 k$ is cool.
