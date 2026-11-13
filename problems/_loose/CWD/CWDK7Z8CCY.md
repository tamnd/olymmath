---
tag: CWDK7Z8CCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs of natural numbers $(m, r)$ with $2014 \ge m \ge r \ge 1$ that fulfill
$\binom{2014}{m}+\binom{m}{r}=\binom{2014}{r}+\binom{2014-r}{m-r} $
