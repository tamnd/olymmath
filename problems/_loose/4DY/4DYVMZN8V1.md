---
tag: 4DYVMZN8V1
kind: problem
type: answer
answer: "30"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The positive integers are written into rows so that Row $n$ includes every integer $m$ with the following properties:
(i) $m$ is a multiple of $n$,
(ii) $m \leq n^{2}$, and
(iii) $m$ is not in an earlier row.
The table below shows the first six rows.
(a) Determine the smallest integer in Row 10.
(b) Show that, for all positive integers $n \geq 3$, Row $n$ includes each of $n^{2}-n$ and $n^{2}-2 n$.
(c) Determine the largest positive integer $n$ with the property that Row $n$ does not include $n^{2}-10 n$.
