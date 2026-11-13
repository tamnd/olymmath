---
tag: KKR87M4KDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3147676
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49176
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154005
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=55
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2023
    source: hf-ai-mo-aops
    label: 2023 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round One
---
Find all triples $(a, b, n)$ of positive integers such that $a$ and $b$ are both divisors of $n$ , and $a+b = \frac{n}{2}$ .
