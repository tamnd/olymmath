---
tag: 255RNDSVDN
kind: problem
type: answer
answer: All positive integers k greater than or equal to 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 42nd Balkan Mathematical Olympiad
---
Given a positive integer $k$, a pair of positive integers $(a, b)$ is said to be $k$-nice if $a \mid b^k + 1$ and $b \mid a^k + 1$. For which positive integers $k$ are there infinitely many $k$-nice pairs?
