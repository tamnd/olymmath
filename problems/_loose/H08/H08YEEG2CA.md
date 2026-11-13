---
tag: H08YEEG2CA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. There are $n$ towns arranged on a East-West road. Each town has two rhinoceroses, one heading East from the town, and the other heading West from the town (rhinoceroses cannot turn into another direction.) These $2n$ rhinoceroses all have different sizes. When two rhinoceroses confront face to face, the larger one would knock the smaller one out of the road. However, if a rhinoceros is bumped by another from its rear end, the bumped rhinoceros is knocked out of the road, regardless of their sizes.
Let $A$ and $B$ be two towns, with $B$ being East to $A$. We say that $A$ tramples $B$, if the East-heading rhinoceros of $A$ can reach $B$ by knocking off all rhinoceroses in between. Similarly, we say that $B$ tramples $A$ if the West-heading rhinoceros of $B$ can reach $A$ by knocking off all rhinoceroses in between.
Prove that these is exactly one town that would not be trambled by any other town.
