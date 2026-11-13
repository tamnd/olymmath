---
tag: NTEQNBFY1M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h3362418
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40767
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2024
    source: hf-ai-mo-aops
    label: 2024 Hong Kong TST
---
We say that a real number is 'almost an integer' if it differs from an integer by at most $0.1$ . For example, $2023$ , $-2023.9$ and $2023.0822$ are almost integers. Show that among any $10$ real numbers, there exists two different real numbers whose difference is almost an integer.
