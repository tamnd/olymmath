---
tag: TWS9VN41E2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the triangle $ABC$ with $| AB | = c, | BC | = a, | CA | = b$ the relations hold simultaneously
$$a \ge max \{ b, c, \sqrt{bc}\}, \sqrt{(a - b) (a + c)} + \sqrt{(a - c) (a + b) } \ge 2\sqrt{a^2-bc}$$
Prove that the triangle $ABC$ is isosceles.
