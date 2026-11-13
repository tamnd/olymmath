---
tag: C0K9TCB3AA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h5577
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23569
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Given a sequence $\{a_n\}$ of real numbers such that $|a_{k+m} - a_k - a_m| \leq 1$ for all positive integers $k$ and $m$ , prove that, for all positive integers $p$ and $q$ , $$|\frac{a_p}{p} - \frac{a_q}{q}| < \frac{1}{p} + \frac{1}{q}.$$
