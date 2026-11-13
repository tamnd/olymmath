---
tag: JJS4Y9X9BJ
kind: problem
type: answer
answer: "290"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
20 different villages are located along the coast of a circular island. Each of these villages has 20 fighters, with all 400 fighters having different strengths.

Two neighboring villages $A$ and $B$ now have a competition in which each of the 20 fighters from village $A$ competes with each of the 20 fighters from village $B$. The stronger fighter wins. We say that village $A$ is stronger than village $B$ if a fighter from village $A$ wins at least $k$ of the 400 fights.

It turns out that each village is stronger than its neighboring village in a clockwise direction. Determine the maximum value of $k$ so that this can be the case.
