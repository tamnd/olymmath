---
tag: F0R67Q2MQZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A frog is jumping on $N$ stones which are numbered from $1$ to $N$ from left to right. The frog is jumping to the previous stone (to the left) with probability $p$ and is jumping to the next stone (to the right) with probability $1-p$. If the frog has jumped to the left from the leftmost stone or to the right from the rightmost stone, it will fall into the water. The frog is initially on the leftmost stone. If $p< \tfrac 13$, show that the frog will fall into the water from the rightmost stone with a probability higher than $\tfrac 12$.
