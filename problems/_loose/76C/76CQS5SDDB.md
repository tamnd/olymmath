---
tag: 76CQS5SDDB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers $x_{1}, x_{2}$ are less than 10000. From them, a sequence $x_{1}, x_{2}$, $x_{3}, \ldots, x_{n}$ is constructed, where the number $x_{3}$ is equal to $\left|x_{1}-x_{2}\right|$, the number $x_{4}$ is the smallest of the numbers $\left|x_{1}-x_{2}\right|,\left|x_{2}-x_{3}\right|$, $\left|x_{1}-x_{3}\right|$, the number $x_{5}$ is the smallest of the numbers $\left|x_{1}-x_{2}\right|,\left|x_{1}-x_{3}\right|,\left|x_{1}-x_{4}\right|,\left|x_{2}-x_{3}\right|,\left|x_{2}-x_{4}\right|$, $\left|x_{3}-x_{4}\right|$ and so on (each subsequent number is the smallest of the absolute differences between the previous numbers). Prove that $x_{21}=0$ must be true.
