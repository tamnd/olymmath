---
tag: YVSX7CY6JP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2020
    source: hf-mathnet
    label: Baltic Way Baltic Way 2020
---
Consider the Euclidean plane, the points $A = (0,0)$ and $B = (1,0)$ and the open half-strip
$$
S = \{(x, y) : 0 < x < 1, y > 0\}
$$
with width 1 and vertices $A$ and $B$.
Find all functions $f: S \to S$ satisfying the following conditions for all $P, Q \in S$:
(i) $f(f(P)) = P$
(ii) If $P, Q, A$ are collinear, then $f(P), f(Q)$ and $B$ are collinear.
(iii) If $f(P) = P$ and $f(Q) = Q$, then there is a circle containing $A, B, P$ and $Q$.
