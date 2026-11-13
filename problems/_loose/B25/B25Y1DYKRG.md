---
tag: B25Y1DYKRG
kind: problem
type: answer
answer: k(kn - n + 2)/(2(kn + 1))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Given positive integers $k$ and $n$ ($n \ge 2$), find the minimum constant $c$ satisfying this assertion: if $G$ is a simple $kn$-regular graph (the degree of each vertex is $kn$) with $m$ vertices, then each vertex can be coloured one of $n$ colours, such that the number of "mono edges" is at most $cm$. Here, a mono edge is an edge incident to two vertices of the same colour.
