---
tag: X971Q5ANJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the set of functions:

$G=\left\{f_{a}: \mathbb{R} \rightarrow \mathbb{R} \mid f_{a}(x)=x-2 a[x]+a[2 x], a \in \mathbb{Z}\right\}$, where $[y]$ is the integer part of the number $y$.

a) Show that if $f_{a}, f_{b} \in G$, then $f_{a} \circ f_{b} \in G$.

b) Show that $(G, \circ)$ is a commutative group, isomorphic to the group $(\mathbb{Z},+)$ where $\circ$ is the composition of functions.
