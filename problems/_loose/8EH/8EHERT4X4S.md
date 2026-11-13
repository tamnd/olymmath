---
tag: 8EHERT4X4S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h3164408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70379
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Let $r, s, t, u$ be the distinct roots of the polynomial $x^4 + 2x^3 + 3x^2 + 3x + 5$ . For $n \ge 1$ , define $s_n = r^n + s^n + t^n + u^n$ and $t_n = s_1 + s_2 + ...+ s_n$ . Compute $t_4 + 2t_3 + 3t_2 + 3t_1 + 5$ .
