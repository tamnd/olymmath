---
tag: M2A95JAGHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378361
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19309
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Julia bakes a cake in the shape of a unit square. Each minute, Julia makes two cuts through the cake as follows:

- she picks a **square** piece $\mathcal{S}$ of the cake with no cuts through its interior; then
- she slices the entire cake along the two lines parallel to the sides of the cake passing through the center of $\mathcal{S}$ .

She does not move any pieces of cake during this process. After eight minutes, she has a grid of $9^2 = 81$ pieces of cake. (The pieces can be various sizes.) Compute the number of distinct grids that she could have ended up with. Two grids are the same if they have the same set of cuts; in particular, two grids that differ by a rotation or reflection are distinct.

*Proposed by Sean Li*
