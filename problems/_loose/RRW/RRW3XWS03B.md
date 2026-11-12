---
tag: RRW3XWS03B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890156
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1950
    source: hf-ai-mo-aops
    label: 1950 Moscow Mathematical Olympiad
---
a) We are given $n$ circles $O_1, O_2, . . . , O_n$ , passing through one point $O$ . Let $A_1, . . . , A_n$ denote the second intersection points of $O_1$ with $O_2, O_2$ with $O_3$ , etc., $O_n$ with $O_1$ , respectively. We choose an arbitrary point $B_1$ on $O_1$ and draw a line segment through $A_1$ and $B_1$ to the second intersection with $O_2$ at $B_2$ , then draw a line segment through $A_2$ and $B_2$ to the second intersection with $O_3$ at $B_3$ , etc., until we get a point $B_n$ on $O_n$ . We draw the line segment through $B_n$ and $A_n$ to the second intersection with $O_1$ at $B_{n+1}$ . If $B_k$ and $A_k$ coincide for some $k$ , we draw the tangent to $O_k$ through $A_k$ until this tangent intersects $O_{k+1}$ at $B_{k+1}$ . Prove that $B_{n+1}$ coincides with $B_1$ .

b) for $n=3$ the same problem.
