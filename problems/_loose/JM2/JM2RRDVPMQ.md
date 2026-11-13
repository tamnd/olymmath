---
tag: JM2RRDVPMQ
kind: problem
type: answer
answer: "200"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a competition, 300 contestants participate. Any two contestants either know each other or do not know each other, and there do not exist three contestants who all know each other. Determine the largest possible value of the number $n$ such that the following conditions are satisfied:

- Each contestant knows at most $n$ other contestants.
- For every natural number $m$ such that $1 \leqslant m \leqslant n$, there exists at least one contestant who knows exactly $m$ other contestants.
