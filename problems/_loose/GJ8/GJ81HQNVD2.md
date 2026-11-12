---
tag: GJ81HQNVD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a prime number $p$. We will call a triangle allowed if all its angles are of the form $m / p \cdot 180^{\circ}$, where $m$ is an integer. We will consider allowed triangles the same if they have the same set of angles (i.e., similar). Initially, one allowed triangle is given. Every minute, one of the existing triangles is cut into two allowed triangles such that after the cut, all existing triangles are different. After some time, it turned out that none of the triangles can be cut in this way anymore. Prove that by this moment, among the existing parts, there are all possible allowed triangles.
