---
tag: MHBBB9CFQG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h375600
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55806
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
Suppose that $M$ is a set of $2003$ numbers such that, for any distinct $a, b, c \in M$ , the number $a^2 + bc$ is rational. Prove that there is a positive integer $n$ such that $a\sqrt n$ is rational for all $a \in M.$
