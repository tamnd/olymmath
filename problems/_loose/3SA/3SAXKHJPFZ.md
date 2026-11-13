---
tag: 3SAXKHJPFZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, one cow is located on every negative integer on the number line. Each day, Farmer John chooses an integer $k$ where the interval $[k, k+5000]$ has cows. First, he moves each cow in $[k, k+5000]$ to another integer in the interval, so that no two cows move to the same integer. Then, he chooses a cow in the interval and removes it.

Can Farmer John get a cow on $100,000,000$ after some time?
