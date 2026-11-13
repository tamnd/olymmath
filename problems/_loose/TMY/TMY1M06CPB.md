---
tag: TMY1M06CPB
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, let $f_{1}(n)$ denote the square of the sum of the digits plus $r+1$, where $r$ is the integer satisfying $n=3 q+$ $r(q$ is an integer $), 0 \leqslant r \leqslant 3$. For $k \geqslant 2$, let $f_{k}(n)=f_{1}\left[f_{k-1}(n)\right]$, then $f_{2001}(2345)=$ $ $ ,$f_{2001}(2001)=$ $ $ .
