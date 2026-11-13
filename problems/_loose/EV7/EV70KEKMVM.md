---
tag: EV70KEKMVM
kind: problem
type: answer
answer: "32"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Rioplatense Mathematical Olympiad
---
Initially we have a paper triangle $ABC$ such that $\angle BAC = 120^\circ$. In the first step, we draw the angle bisectors of the three angles of the triangle, which intersect in $I$, and then using a pair of scissors we cut along segments $AI$, $BI$ and $CI$, obtaining 3 triangles: $ABI$, $BCI$ and $CAI$. In the second step we repeat the same procedure with the three triangles, that is: each one of those is cut into three smaller triangles cutting along the angle bisectors. At the end of the second step we have 9 triangles in total. This procedure continues in the same way until we complete 10 steps.
How many of the triangles at the end of the process have an angle of $120^\circ$?
