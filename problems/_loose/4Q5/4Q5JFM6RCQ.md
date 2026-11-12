---
tag: 4Q5JFM6RCQ
kind: problem
type: answer
answer: bor0,2b>0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $x_{n}$ is an arithmetic progression, then $x_{n}=b+(c-b)(n-1)$. Then $x_{n+1}=b+(c-b) n, x_{n+2}=b+(c-b)(n+1)$. Substitute these expressions into the condition:

$b+(c-b)(n+1)=3(b+(c-b) n)-2(b+(c-b)(n-1))+a \leftrightarrow$

$\leftrightarrow(c-b)(n+1-3 n+2(n-1))+a=0 \rightarrow a=(c-b)0$
