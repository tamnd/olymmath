---
tag: KZYA8946VN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Construct a histogram of relative frequencies based on the given sample distribution:

| Interval Number $i$ | Partial Interval $\boldsymbol{x}_{i}-\boldsymbol{x}_{i+1}$ | Sum of Frequencies of Partial Interval $ n_{i}$ |
| :---: | :---: | :---: |
| 1 2 3 | $0-2$ $2-4$ $4-6$ | 20 30 50 |
