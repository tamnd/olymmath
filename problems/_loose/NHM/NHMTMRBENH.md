---
tag: NHMTMRBENH
kind: problem
type: answer
answer: \sqrt{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the limit, when $n$ tends to the infinity, of $$\frac{\sum_{k=0}^{n} {{2n} \choose {2k}} 3^k} {\sum_{k=0}^{n-1} {{2n} \choose {2k+1}} 3^k}$$
