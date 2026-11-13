---
tag: RTKMH3RTZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h91052
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25319
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1996
    source: hf-ai-mo-aops
    label: 1996 IMO Shortlist
---
Let $ a_{1}, a_{2}...a_{n}$ be non-negative reals, not all zero. Show that that
(a) The polynomial $ p(x) = x^{n} - a_{1}x^{n - 1} + ... - a_{n - 1}x - a_{n}$ has preceisely 1 positive real root $ R$ .
(b) let $ A = \sum_{i = 1}^n a_{i}$ and $ B = \sum_{i = 1}^n ia_{i}$ . Show that $ A^{A} \leq R^{B}$ .
