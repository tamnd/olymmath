---
tag: YNFZQRNNM1
kind: problem
type: answer
answer: \binom{m+n-2}{n-1} - \binom{m+n-2}{n-3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ boxes which is numbere from $1$ to $n$. The box with number $1$ is open, and the others are closed. There are $m$ identical balls ($m\geq n$). One of the balls is put into the open box, then we open the box with number $2$. Now, we put another ball to one of two open boxes, then we open the box with number $3$. Go on until the last box will be open. After that the remaining balls will be randomly put into the boxes. In how many ways this arrangement can be done?
