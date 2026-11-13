---
tag: ZPWC3PR7HF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610441
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2619
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Germany Team Selection Test
---
Let $n$ be a positive integer. There are $2n$ knights sitting at a round table. They consist of $n$ pairs of partners, each pair of which wishes to shake hands. A pair can shake hands only when next to each other. Every minute, one pair of adjacent knights swaps places. Find the minimum number of exchanges of adjacent knights such that, regardless of the initial arrangement, every knight can meet her partner and shake hands at some time.
