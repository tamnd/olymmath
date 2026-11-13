---
tag: NHWNXWZ1RE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. Hippo chooses a list of $n$ points in the plane $P_1, \dots, P_n$; some of these points may coincide, but not all of them can be identical. After this, Wombat picks a point from the list $X$ and measures the distances from it to the other $n-1$ points in the list. The average of the resulting $n-1$ numbers will be denoted $m(X)$.
Find all values of $n$ for which Hippo can prepare the list in such a way, that for any point $X$ Wombat may pick, he can point to a point $Y$ from the list such that $XY=m(X)$.
