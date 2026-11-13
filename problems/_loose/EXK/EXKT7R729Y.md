---
tag: EXKT7R729Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022965
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28972
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
Let $n$ be a positive integer. Prove that there exist integers $a_1, a_2,..., a_n$ such that for any integer $x$ , the number $(... (((x^2 + a_1)^2 + a_2)^2 + ...)^2 + a_{n-1})^2 + a_n$ is divisible by $2n - 1$ .
