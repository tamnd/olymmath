---
tag: HEX17Z8CDG
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 51st Ukrainian National Mathematical Olympiad, 3rd Round
---
There are $2012$ piles of stones. The first pile contains $2^0$ stones, the second pile contains $2^1$ stones, the third pile contains $2^2$ stones, and so on. The $2012$-th pile contains $2^{2011}$ stones. At one step, one can pick three piles and add $2$ stones to the first pile, $3$ stones to the second pile, and $4$ stones to the third pile, or pick any three piles and take $2$ stones out of the first pile, $3$ stones out of the second pile, and $4$ stones out of the third pile, provided that each pile has enough stones. Is it possible after a finite number of such operations to get exactly $3^{1005}$ stones in each pile?
