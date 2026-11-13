---
tag: DBJ8GBZWEB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1975 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h367912
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25184
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225930
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1975
    source: hf-ai-mo-aops
    label: 1975 IMO Shortlist
---
Let $a_1, a_2, \ldots , a_n, \ldots $ be a sequence of real numbers such that $0 \leq a_n \leq 1$ and $a_n - 2a_{n+1} + a_{n+2} \geq 0$ for $n = 1, 2, 3, \ldots$ . Prove that
$$0 \leq (n + 1)(a_n - a_{n+1}) \leq 2 \text{ for } n = 1, 2, 3, \ldots$$
