---
tag: JZD38PWXAF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2131171
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54887
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2014
    source: hf-ai-mo-aops
    label: 2014 239 Open Mathematical Olympiad
---
Prove that the for all $n>1000$ , we can arrange the number $1,2,\dots, \binom{n}{2}$ on edges of a complete graph with $n$ vertices so that the sum of the numbers assigned to edges of any length three path (possibly closed) is not less than $3n-1000log_2log_2 n$ .
