---
tag: V94B2TBV3R
kind: problem
type: answer
answer: "2221211122"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a positive integer N is *nice* if it satisfies the following conditions:
$\bullet$ All of its digits are $1$ or $2$
$\bullet$ All numbers formed by $3$ consecutive digits of $N$ are distinct.
For example, $121222$ is nice, because the $4$ numbers formed by $3$ consecutive digits of $121222$, which are $121,212,122$ and $222$, are distinct. However, $12121$ is not nice. What is the largest quantity possible number of numbers that a nice number can have? What is the greatest nice number there is?
