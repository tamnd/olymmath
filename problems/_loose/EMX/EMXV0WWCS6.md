---
tag: EMXV0WWCS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a multi-digit number $\overline{a b c \ldots k x y z}$. By separating the three-digit number formed by the last three digits, we obtain two numbers: $\overline{a b c \ldots k}$ and $\overline{x y z}$. Prove that if the difference of the obtained numbers is divisible by 7 (or by 11, or by 13), then the given number is also divisible by 7 (or by 11, or by 13).
