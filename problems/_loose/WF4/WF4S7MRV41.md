---
tag: WF4S7MRV41
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h412795
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28663
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2003 Tournament Of Towns
---
Find all positive integers $k$ such that there exist two positive integers $m$ and $n$ satisfying
$$m(m + k) = n(n + 1).$$
