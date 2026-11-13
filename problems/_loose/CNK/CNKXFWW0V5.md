---
tag: CNKXFWW0V5
kind: problem
type: answer
answer: 2012^3/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
Consider $S = \{(x, y, z) \mid x, y, z \in \{1, 2, \dots, 2012\}\}$ as a set of $2012^3$ points in three-dimensional space. For any segment joining two points $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$ in the space, we define its *distance triplet* to be the ordered triple
$$
(|x_1 - x_2|, |y_1 - y_2|, |z_1 - z_2|).
$$
Alice wants to draw segments in such a way that

a. Each segment joins two distinct points in $S$;

b. Each point in $S$ is an endpoint of at most one segment;

c. For any two segments, their distance triplets are different.

Find the greatest number of segments that Alice can draw.
