---
tag: XGNAVS7D0N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83602
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A tournament among King Arthur's knights has been organized, and all possible jousts have been fought. Show that it is possible to order the knights so that the first one beat the second, the second beat the third, and so on until the last.

Bonus: If there are $n$ knights who have won $v_{1}, v_{2}, \ldots v_{n}$ combats, show that the tournament is transitive (in the sense that if $A$ defeated $B$ and $B$ defeated $C$, then $A$ defeated $C$) if and only if:

$$
\sum_{i=1}^{n} v_{i}^{2}=\frac{n(n-1)(2 n-1)}{6}
$$
