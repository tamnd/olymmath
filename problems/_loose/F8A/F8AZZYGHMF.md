---
tag: F8AZZYGHMF
kind: problem
type: answer
answer: \left\lfloor \frac{n^2 - 3n}{3} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, determine the largest integer $M$ satisfying
$$\lfloor \sqrt{a_1}\rfloor + ... + \lfloor \sqrt{a_n} \rfloor \ge \lfloor\sqrt{ a_1 + ... + a_n +M \cdot min(a_1,..., a_n)}\rfloor $$
for all non-negative integers $a_1,...., a_n$.

S. Berlov, A. Khrabrov
