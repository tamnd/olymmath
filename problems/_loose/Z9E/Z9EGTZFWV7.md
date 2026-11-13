---
tag: Z9EGTZFWV7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3071464
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21328
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2022
    source: hf-ai-mo-aops
    label: 2022 Balkan MO Shortlist
---
Find the largest positive integer $k{}$ for which there exists a convex polyhedron $\mathcal{P}$ with 2022 edges, which satisfies the following properties:

- The degrees of the vertices of $\mathcal{P}$ don't differ by more than one, and
- It is possible to colour the edges of $\mathcal{P}$ with $k{}$ colours such that for every colour $c{}$ , and every pair of vertices $(v_1, v_2)$ of $\mathcal{P}$ , there is a monochromatic path between $v_1$ and $v_2$ in the colour $c{}$ .

*Viktor Simjanoski, Macedonia*
