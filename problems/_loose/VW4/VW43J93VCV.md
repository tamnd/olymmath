---
tag: VW43J93VCV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3537713
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $ n \geq 2 $ be an integer. Two players, Alice and Bob, play the following game on the complete graph $ K_n $: They take turns to perform operations, where each operation consists of coloring one or two edges that have not been colored yet. The game terminates if at any point there exists a triangle whose three edges are all colored.

Prove that there exists a positive number $\varepsilon$, Alice has a strategy such that, no matter how Bob colors the edges, the game terminates with the number of colored edges not exceeding
$$
\left( \frac{1}{4} - \varepsilon \right) n^2 + n.
$$
