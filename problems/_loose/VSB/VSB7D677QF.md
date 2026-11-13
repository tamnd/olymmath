---
tag: VSB7D677QF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h412735
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28657
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228679
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
For any integer $n+1,\ldots, 2n$ ( $n$ is a natural number) consider its greatest odd divisor. Prove that the sum of all these divisors equals $n^2.$
