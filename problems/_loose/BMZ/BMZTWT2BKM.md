---
tag: BMZTWT2BKM
kind: problem
type: answer
answer: a) No; b) Yes
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=70
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2008
    source: hf-mathnet
    label: Ukraine Ukrajina 2008
---
There are five piles made of $42$, $70$, $105$, $462$, and $2009$ stones respectively. You are allowed to do the following: instead of two piles consisting of $a$ and $b$ stones you can make
* two piles of $a$ and $(a+b)$ stones;
* two piles of $a$ and $|a-b|$ stones.
You can also choose $k$ different piles, in which the total number of stones equals $nk$ where $n$ is some natural number, and create
* $k$ piles of $n$ stones in each one instead.
Can we make five piles each of which will consist of
a) $2008$ stones;
b) $2009$ stones
in finite number of steps?
