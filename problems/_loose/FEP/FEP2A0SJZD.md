---
tag: FEP2A0SJZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Celia chooses a number $n$ and writes the list of natural numbers from $1$ to $n$: $1, 2, 3, 4, ..., n-1, n.$ At each step, it changes the list: it copies the first number to the end and deletes the first two. After $n-1$ steps a single number will be written.
For example, for $n=6$ the five steps are: $$ 1,2,3,4,5,6 \to 3,4,5,6,1 \to 5,6,1,3 \to 1,3,5 \to 5,1 \to 5$$
and the number $5$ is written.
Celia chose a number $n$ between $1000$ and $3000$ and after $n-1$ steps the number $1$ was written.
Determine all the values of $n$ that Celia could have chosen.
Justify why those values work, and the others do not.
