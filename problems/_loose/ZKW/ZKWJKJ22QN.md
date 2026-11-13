---
tag: ZKWJKJ22QN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h146495
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29329
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2001
    source: hf-ai-mo-aops
    label: 2001 Tuymaada Olympiad
---
Non-zero numbers are arranged in $n \times n$ square ( $n>2$ ). Every number is exactly $k$ times less than the sum of all the other numbers in the same cross (i.e., $2n-2$ numbers written in the same row or column with this number).
Find all possible $k$ .

*Proposed by D. Rostovsky, A. Khrabrov, S. Berlov*
