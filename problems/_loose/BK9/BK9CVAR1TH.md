---
tag: BK9CVAR1TH
kind: problem
type: answer
answer: n(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ football teams participating in a league, where each team plays a match against every other team exactly once. It is stipulated that a win earns 3 points, a draw earns 1 point, and a loss earns 0 points. After the league ends, some teams may be disqualified, and thus their match results will also be canceled. The remaining teams will have their scores recalculated, and the team with the most points will become the champion of this league (if only one team is not disqualified, then that team is the champion).

Let $f_{i}(T)(i=1,2, \cdots, n)$ be the minimum number of teams that must be disqualified in this league $T$ to ensure that the $i$-th team becomes the champion, and let $F(T)=f_{1}(T)+f_{2}(T)+\cdots+f_{n}(T)$. For $n \geqslant 5$, find the maximum and minimum values of $F(T)$.
