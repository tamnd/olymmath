---
tag: QDBMV4HSCB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=18
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 27th Iranian Mathematical Olympiad
---
Consider that we have omitted some of the points of a 2d-lattice (same as $\mathbb{Z}^2$). Look at these points as a graph, two points (vertices) are connected if they are the same in one of their coordinates and differ 1 in another. Each connected component is called a *cluster*. Suppose that for all $n \in \mathbb{N}$, the number of omitted points inside the horizontal square with side length $2n + 1$ and the origin as its center, be less than $n/2$. Prove that the non-omitted points contain exactly one infinite cluster.
