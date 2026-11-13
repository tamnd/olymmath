---
tag: N7T9QJZHW6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h3041313
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70838
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2023
    source: hf-ai-mo-aops
    label: 2023 CMIMC Team
---
Suppose $a_1, a_2, a_3, \dots,$ is a sequence of real numbers such that $$ a_n = \frac{a_{n-1}a_{n-2}}{3a_{n-2}-2a_{n-1}} $$ for all $n \ge 3$ . If $a_1 = 1$ and $a_{10} = 10$ , what is $a_{19}$ ?

*Proposed by Howard Halim*
