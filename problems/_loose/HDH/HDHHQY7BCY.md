---
tag: HDHHQY7BCY
kind: problem
type: answer
answer: "91"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Joe has a $1 \times 46^2$ rectangular dogwood strip consisting of $46^2$ unit squares, which are labelled from 1 to $46^2$ in order. Joe saws the strip into $N$ pieces, each of which consists of a number of consecutive unit squares, and rearrange them (without rotating or flipping) into a $46 \times 46$ grids satisfying the following: if the square in the $i^{th}$ row and $j^{th}$ column is labelled with $a_{ij}$, then $a_{ij} - (i + j - 1)$ is divisible by 46. Find the smallest possible number of $N$.
