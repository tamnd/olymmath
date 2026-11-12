---
tag: SCWMCK3PWM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of natural numbers $\left(a_{n}\right)$ is constructed according to the following rule. Each of its members with an even index $a_{2 n}$ is obtained from $a_{2 n-1}$ by subtracting one of its digits, and each member with an odd index $a_{2 n+1}$ is obtained from $a_{2 n}$ by adding one of the digits of $a_{2 n}$. Prove that all members of this sequence do not exceed $10 a_{1}$.
