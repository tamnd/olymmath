---
tag: MTBH1X4A3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two sequences $b_i$, $c_i$, $0 \le i \le 100$ contain positive integers, except $c_0=0$ and $b_{100}=0$.
Some towns in Graphland are connected with roads, and each road connects exactly two towns and is precisely $1$ km long. Towns, which are connected by a road or a sequence of roads, are called *neighbours*. The length of the shortest path between two towns $X$ and $Y$ is denoted as *distance*. It is known that the greatest *distance* between two towns in Graphland is $100$ km. Also the following property holds for every pair $X$ and $Y$ of towns (not necessarily distinct): if the *distance* between $X$ and $Y$ is exactly $k$ km, then $Y$ has exactly $b_k$ *neighbours* that are at the *distance* $k+1$ from $X$, and exactly $c_k$ *neighbours* that are at the *distance* $k-1$ from $X$.
Prove that $$\frac{b_0b_1 \cdot \cdot \cdot b_{99}}{c_1c_2 \cdot \cdot \cdot c_{100}}$$ is a positive integer.
