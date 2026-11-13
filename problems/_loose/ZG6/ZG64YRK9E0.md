---
tag: ZG64YRK9E0
kind: problem
type: answer
answer: n \geq 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215593
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n\geq 2$. There are $N$ distinct circle on the plane such that any two circles have two distinct intersections and no three circles have a common intersection. Initially there is a coin on each of the intersection points of the circles. Starting from $X$, players $X$ and $Y$ alternatively take away a coin, with the restriction that one cannot take away a coin lying on the same circle as the last coin just taken away by the opponent in the previous step. The one who cannot do so will lost. In particular, one loses where there is no coin left. For what values of $n$ does $Y$ have a winning strategy?
