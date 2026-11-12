---
tag: 1RN4KJ28FM
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In one move, you can choose a natural number $x$ and cross out all natural numbers $y$ such that $|x-y|$ is a natural composite number. At the same time, $x$ can be chosen from already crossed out numbers.

What is the minimum number of moves needed to cross out all numbers from the natural number sequence?
