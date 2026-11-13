---
tag: BRC9E5DR9C
kind: problem
type: answer
answer: "101"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139713
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive integer $n$, such that for any given $n$ rectangles with side lengths being positive integers not exceeding 100, there always exist 3 rectangles $R_{1}, R_{2}, R_{3}$, such that $R_{1}$ can be placed inside $R_{2}$, and $R_{2}$ can be placed inside $R_{3}$.
