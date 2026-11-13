---
tag: R8YYHN7J76
kind: problem
type: answer
answer: C_{n-k+1}^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ elements are arranged in a sequence, from which some elements are selected to form a subset. If any two elements in the subset are not adjacent in the sequence, then this subset is called "unfriendly". Prove that the number of $k$-element unfriendly subsets is $C_{n-k+1}^{k}$.
