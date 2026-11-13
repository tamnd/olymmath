---
tag: 7VDT6PVMJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Ukraine National Mathematical  Olympiad
    url: https://artofproblemsolving.com/community/c6h3221578
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=63044
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2021
    source: hf-ai-mo-aops
    label: 2021 Ukraine National Mathematical  Olympiad
---
Nonnegative integers $x_1, x_2 , \ldots, x_n$ are such that $x_1^2 + x_2^2 + \ldots +x_n^2 = n$ , $n > 1$ . Prove that for any nonnegative real numbers $y_1, y_2 , \ldots, y_n$ there exist indices $i, j \in \{1, 2, \ldots, n\}$ , not necessarily different, for which the following inequality holds: $$ x_i + y_j - x_{j+1}y_{i+1} \geq 1 $$ (Here index $n+1 = $ index $1$ ).

*Proposed by Nazar Serdyuk*
