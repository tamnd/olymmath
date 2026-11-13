---
tag: TZ4QA3DRVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all integers $0 \leq k \leq 16$, let $$S_k = \sum_{j=0}^{k}(-1)^j {\binom{16}{j}}.$$ Compute $\max(S_0,S_1, \ldots S_{16})$.

*2021 CCA Math Bonanza Tiebreaker Round #4*
