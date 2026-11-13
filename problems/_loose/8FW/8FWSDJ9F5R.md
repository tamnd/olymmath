---
tag: 8FWSDJ9F5R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h365232
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5083
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2010
    source: hf-ai-mo-aops
    label: 2010 International Zhautykov Olympiad
---
Positive integers $1,2,...,n$ are written on а blackboard ( $n >2$ ). Every minute two numbers are erased and the least prime divisor of their sum is written. In the end only the number 97 remains. Find the least $n$ for which it is possible.
