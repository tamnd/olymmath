---
tag: RWSZEGJGD6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250600
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set $G$ is defined by the points $(x,y)$ with integer coordinates, $1 \le x \le 5$ and $1 \le y \le 5$. Determine the number of five-point sequences $(P_1, P_2, P_3, P_4, P_5)$ such that for $1 \le i \le 5$, $P_i = (x_i,i)$ is in $G$ and $|x_1 - x_2| = |x_2 - x_3| = |x_3 - x_4|=|x_4 - x_5| = 1$.
