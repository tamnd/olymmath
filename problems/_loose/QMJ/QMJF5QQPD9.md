---
tag: QMJF5QQPD9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133525
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain competition, there are $n(n \geqslant 3)$ participants, and every two participants play a match. Each match must have a winner, and excellent participants are determined through the matches. Participant $a$ is determined to be an excellent participant if for any other participant $b$, either $a$ beats $b$, or there exists a participant $c$, such that $c$ beats $b$ and $a$ beats $c$. If the excellent participant determined by the above rule is unique, prove that this participant has beaten all other participants.
