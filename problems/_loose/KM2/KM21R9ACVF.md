---
tag: KM21R9ACVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Abelkonkurransen Finale
    url: https://artofproblemsolving.com/community/c6h3272818
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1367
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2024
    source: hf-ai-mo-aops
    label: 2024 Abelkonkurransen Finale
---
Determine all integers $n \ge 2$ such that $n \mid s_n-t_n$ where $s_n$ is the sum of all the integers in the interval $[1,n]$ that are mutually prime to $n$ , and $t_n$ is the sum of the remaining integers in the same interval.
