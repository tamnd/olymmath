---
tag: EFSD84A01B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The condition defining a parabola. Let points $P_{i}(i=0,1, \ldots, n)$ be given on the graph of a nonlinear function $f(x)$. Denote by $m_{i}$ the slope of the line connecting points
$P_{i}$ and $P_{i+1}$ (we assume $P_{n+1}=P_{0}$). Let further $f(x)$ be a function defined for all real $x$ and not identically constant. Prove that $f(x)$ is a quadratic trinomial, and its graph will be a parabola if and only if there exists a point $P_{0}$ on this graph such that for any other $n$ points $P_{1}, \ldots, P_{n}$ on the same graph, the following relation holds:

$$
\sum_{i=0}^{n}(-1)^{i} m_{i}=0
$$
