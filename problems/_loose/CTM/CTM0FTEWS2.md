---
tag: CTM0FTEWS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ISL
    url: https://artofproblemsolving.com/community/c6h3610456
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25634
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2024
    source: hf-ai-mo-aops
    label: 2024 ISL
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $n$ and $T$ be positive integers. James has $4n$ marbles with weights $1$ , $2$ , $\dots$ , $4n$ . He places them on a balance scale, so that both sides have equal weight. Andrew may move a marble from one side of the scale to the other, so that the absolute difference in weights of the two sides remains at most $T$ .

Find, in terms of $n$ , the minimum positive integer $T$ such that Andrew may make a sequence of moves such that each marble ends up on the opposite side of the scale, regardless of how James initially placed the marbles.
