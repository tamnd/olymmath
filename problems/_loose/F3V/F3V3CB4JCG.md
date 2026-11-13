---
tag: F3V3CB4JCG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052521
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1076
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
---
Let $f:[0,1] \rightarrow \mathbb{R}$ a non-decreasing function, $f \in C^1,$ for which $f(0) = 0.$ Let $g:[0,1] \rightarrow \mathbb{R}$ a function defined by

$$
g(x) = f(x) + (x - 1) f'(x), \forall x \in [0,1].
$$

a) Show that

$$
\int_{0}^{1} g(x) \text{dx} = 0.
$$

b) Prove that for all functions $\phi :[0,1] \rightarrow [0,1],$ convex and differentiable with $\phi(0) = 0$ and $\phi(1) = 1,$ the inequality holds

$$
\int_{0}^{1} g( \phi(t)) \text{dt} \leq 0.
$$
