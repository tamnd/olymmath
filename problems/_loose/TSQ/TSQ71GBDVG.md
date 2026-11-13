---
tag: TSQ71GBDVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3610442
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2620
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/IMO/train/0000.parquet#row=353
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
Let $n$ be a positive integer. A class of $n$ students run $n$ races, in each of which they are ranked with no draws. A student is eligible for a rating $(a, b)$ for positive integers $a$ and $b$ if they come in the top $b$ places in at least $a$ of the races. Their final score is the maximum possible value of $a-b$ across all ratings for which they are eligible.

Find the maximum possible sum of all the scores of the $n$ students.

*Proposed by William Steinberg, Australia*
