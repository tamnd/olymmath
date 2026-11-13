---
tag: AX38VE4WB2
kind: problem
type: answer
answer: 1, 3, 7, 9, 21, 63
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Any integer from the set $A = \{1, 2, \dots, 2015\}$ is colored either red or green. For given positive integers $a$ and $b$ we are allowed to change the color of any $a$ or $b$ consecutive integers from $A$. A pair $(a, b)$ is called *good* if it is possible to change the color of all numbers after finite number of moves. A positive integer $t \le 2015$ is called *nice* if all pairs $(a, b)$, for which $a + b = t$ are good. Find all nice numbers.
