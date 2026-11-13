---
tag: PJWF3JHSBF
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At the beginning we have a triple of pairwise distinct positive integers $(a, b, c)$ which satisfies $a + b + c = 2015$. Then in each step we replace the current triple of numbers $(x, y, z)$ with the triple $(y + z - x, z + x - y, x + y - z)$. At least how many steps must we make so that starting with a triple $(a, b, c)$ we will certainly get a triple which has at least one negative number?
