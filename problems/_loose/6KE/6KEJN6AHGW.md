---
tag: 6KEJN6AHGW
kind: problem
type: answer
answer: "226"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 2028 points on a circle, each marked with a number from the set $\{1, 2, \cdots, 676\}$, such that each number is used exactly three times. Using these 2028 points as vertices, construct 676 triangles, with no two triangles sharing a vertex. Next, color the point with the largest number among the three vertices of each triangle blue.
(1) Prove that regardless of how these numbers are marked, it is always possible to construct the triangles in such a way that exactly 226 numbers are colored blue.
(2) Is there a way to mark the numbers such that no matter how the triangles are chosen, exactly 226 numbers will be colored blue?
