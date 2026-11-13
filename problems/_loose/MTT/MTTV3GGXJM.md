---
tag: MTTV3GGXJM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, \dots, a_{123}$ be positive integers such that
* $a_1, a_2, \dots, a_{123}$ is a permutation of $1, 2, \dots, 123$, and
* $|a_1 - a_2|, |a_2 - a_3|, \dots, |a_{122} - a_{123}|$ is a permutation of $1, 2, \dots, 122$.
Prove that $\max(a_1, a_{123}) \ge 32$.
