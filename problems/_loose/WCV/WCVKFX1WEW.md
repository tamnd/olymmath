---
tag: WCVKFX1WEW
kind: problem
type: answer
answer: \lfloor\frac{n++1}{2}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An $m \times n(m<n)$ square grid is divided into $m n$ unit squares. $N$ of these squares are initially colored black, and the rest are colored according to the following rule: if an empty square has at least two black neighbors (i.e., squares sharing a common edge), then it is colored black. Find the minimum value of $N$ such that all squares are black after a finite number of operations.
