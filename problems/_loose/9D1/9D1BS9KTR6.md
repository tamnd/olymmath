---
tag: 9D1BS9KTR6
kind: problem
type: answer
answer: 0.6861r<BH<0.6864r
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's examine the accuracy of the following approximate construction for the side of a regular nonagon inscribed in circle $k$.

The regular hexagon inscribed in $k$ has four consecutive vertices $A, B, C, D$. The intersection point of the circle centered at $B$ with radius $BA$ and the circle centered at $D$ with radius $DB$ inside $k$ is $G$. The intersection point of line $BG$ and line $AC$ is $H$. Then the side of the nonagon is approximated by the length of segment $BH$.
