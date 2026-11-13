---
tag: 3FTZX8M1NZ
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Along the coast of an island, there are 20 villages. In each village, 20 warriors live. Each warrior fights with all warriors from other villages. Each pair of warriors has different strength, and the stronger warrior wins the fight. We say that village $A$ has dominated village $B$ if in at least $k$ fights between warriors from $A$ and warriors from $B$, the warrior from $A$ won. After all the fights, it was established that each village has dominated the village that is its immediate neighbor in the clockwise direction.

Prove that the largest possible $k$ is 290.
