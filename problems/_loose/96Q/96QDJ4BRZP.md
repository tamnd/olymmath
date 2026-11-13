---
tag: 96QDJ4BRZP
kind: problem
type: answer
answer: All natural numbers k with gcd(k, 2016) > 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
Grasshopper is sitting at point $O$ of coordinate line. He makes $2016$ jumps in positive direction. Firstly his jump has length $1$, every next jump is $k \in \mathbb{N}$ times longer than the previous one. There are holes in every point with coordinate $2016l$, $l \in \mathbb{N}$. Determine $k$ for which the grasshopper will make all the jumps and will not jump into hole.
