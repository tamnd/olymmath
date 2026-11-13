---
tag: BZAM1FY0HJ
kind: problem
type: answer
answer: "240"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90797
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a market, a buyer and a seller each have four exotic coins. You are allowed to label each of the eight coins with any positive integer value in cents. The labeling is called $n$-efficient if for any integer $k, 1 \leq k \leq n$, it is possible for the buyer and the seller to give each other some of their coins in such a way that, as a net result, the buyer has paid the seller $k$ cents. Find the greatest positive integer $n$ such that an $n$-efficient labeling of the coins exists.
