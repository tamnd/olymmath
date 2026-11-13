---
tag: ZSTPJCFTDT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Federal Competition For Advanced Students, Part 2
    url: https://artofproblemsolving.com/community/c6h256354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30452
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo/2007
    source: hf-ai-mo-aops
    label: 2007 Federal Competition For Advanced Students, Part 2
---
For which non-negative integers $ a<2007$ the congruence $ x^2+a \equiv 0 \mod 2007$ has got exactly two different non-negative integer solutions?
That means, that there exist exactly two different non-negative integers $ u$ and $ v$ less than $ 2007$ , such that $ u^2+a$ and $ v^2+a$ are both divisible by $ 2007$ .
