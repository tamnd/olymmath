---
tag: AN2PVA87PR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h486670
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1995
    source: hf-ai-mo-aops
    label: 1995 All-Russian Olympiad
---
The sequence $a_1, a_2, ...$ of natural numbers satisfies $GCD(a_i, a_j)=GCD(i, j)$ for all $i \neq j$ . Prove that $a_i=i$ for all $i$ .
