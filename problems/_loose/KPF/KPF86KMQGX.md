---
tag: KPF86KMQGX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2011134
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54343
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1991
    source: hf-ai-mo-aops
    label: 1991 Romania Team Selection Test
---
The sequence ( $a_n$ ) is defined by $a_1 = a_2 = 1$ and $a_{n+2 }= a_{n+1} +a_n +k$ , where $k$ is a positive integer.
Find the least $k$ for which $a_{1991}$ and $1991$ are not coprime.
