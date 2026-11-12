---
tag: MFAZW5N09T
kind: problem
type: answer
answer: S_{n}=0,ifn\equiv2,5(\bmod6);S_{n}=1,ifn\equiv0,1(\bmod6);S_{n}=-1,ifn\equiv3,4(\bmod6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the sum: $S_{n}=C_{n}^{0}-C_{n-1}^{1}+C_{n-2}^{2}-\ldots$.
