---
tag: TGAT7FZBSK
kind: problem
type: answer
answer: "72"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 20 chairs arranged in a circle. There are $n$ people sitting in $n$ different chairs. These $n$ people stand, move $k$ chairs clockwise, and then sit again. After this happens, exactly the same set of chairs is occupied. (For example, if the 2nd, 4th, 7th, 9th, 12th, 14th, 17th, and 19th chairs are occupied to begin with, then exactly the same set of $n=8$ chairs is occupied after each person moves $k=15$ chairs clockwise.) For how many pairs $(n, k)$ with $1 \leq n \leq 20$ and $1 \leq k \leq 20$ is this possible?
