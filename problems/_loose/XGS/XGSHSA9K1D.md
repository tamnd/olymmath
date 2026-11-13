---
tag: XGSHSA9K1D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a room, there are $100$ light switches, labeled with the positive integers ${1,2, . . . ,100}$. They're all initially turned off. On the $i$ th day for $1 \le i \le 100$, Bob flips every light switch with label number $k$ divisible by $i$ a total of $\frac{k}{i}$ times. Find the sum of the labels of the light switches that are turned on at the end of the $100$th day.
