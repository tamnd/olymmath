---
tag: ENGKY18C01
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610446
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2622
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Germany Team Selection Test
  - at: isl/2024
    source: hf-mathnet
    label: IMO IMO2024 Shortlisted Problems
---
Let $n$ be a positive integer. Find the minimum possible value of
$$
S = 2^0 x_0^2 + 2^1 x_1^2 + \dots + 2^n x_n^2,
$$
where $x_0, x_1, \dots, x_n$ are nonnegative integers such that $x_0 + x_1 + \dots + x_n = n$ .
