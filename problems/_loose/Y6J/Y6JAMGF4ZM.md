---
tag: Y6JAMGF4ZM
kind: problem
type: answer
answer: "671"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
let ${a_{n}}$ be a sequence of integers,$a_{1}$ is odd,and for any positive integer $n$,we have
$n(a_{n+1}-a_{n}+3)=a_{n+1}+a_{n}+3$,in addition,we have $2010$ divides $a_{2009}$
find the smallest $n\ge\ 2$,so that $2010$ divides $a_{n}$
