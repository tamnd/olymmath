---
tag: VPA54EKJTP
kind: problem
type: answer
answer: \frac{a - b}{a + b} \in \mathbb{Q}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set $S \subset R^+$, $S \ne \emptyset$ such that for all $a, b, c \in S$ (not necessarily distinct) then $a^3 + b^3 + c^3 - 3abc$ is rational number. Prove that for all $a, b \in S$ then $\frac{a - b}{a + b}$ is also rational.
