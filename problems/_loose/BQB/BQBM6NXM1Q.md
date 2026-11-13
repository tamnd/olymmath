---
tag: BQBM6NXM1Q
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2022
    source: hf-mathnet
    label: Balkan Mathematical Olympiad BMO 2022 shortlist
---
Find the largest positive integer $k$ for which there exists a convex polyhedron $P$ with the following properties:
(a) $P$ has exactly $2022$ edges.
(b) The degrees of the vertices of $P$ don't differ by more than $1$.
(c) It is possible to colour the edges of $P$ with $k$ colours such that for every colour $c$, and every pair of vertices ($v_1$, $v_2$) of $P$, there is a monochromatic path between $v_1$ and $v_2$ in the colour $c$.
