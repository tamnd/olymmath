---
tag: V0PT71JP6C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h2790101
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2022
    source: hf-ai-mo-aops
    label: 2022 Greece National Olympiad
---
Let $n>4$ be a positive integer, which is divisible by $4$ . We denote by $A_n$ the sum of the odd positive divisors of $n$ . We also denote $B_n$ the sum of the even positive divisors of $n$ , excluding the number $n$ itself. Find the least possible value of the expression $$ f(n)=B_n-2A_n, $$ for all possible values of $n$ , as well as for which positive integers $n$ this minimum value is attained.
