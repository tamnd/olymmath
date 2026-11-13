---
tag: JMDAE9PBZ7
kind: problem
type: answer
answer: \frac{4}{27} p^4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$, $b$, $c$ be the lengths of the sides of a triangle $ABC$. Prove that
$$
a^2(p-a)(p-b)+b^2(p-b)(p-c)+c^2(p-c)(p-a)\leqslant\frac{4}{27}p^4,
$$
where $p$ is the half-perimeter of the triangle $ABC$.
