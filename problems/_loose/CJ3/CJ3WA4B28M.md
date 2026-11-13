---
tag: CJ3WA4B28M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$15 .^{+}$ Prove: The following "obvious" algorithm does not necessarily yield a stable matching in a bipartite graph. Start from any matching, if the current matching is not maximal, then add an edge; if it is maximal but not stable, then add the edge causing the instability, while removing any edges currently matching its endpoints.
