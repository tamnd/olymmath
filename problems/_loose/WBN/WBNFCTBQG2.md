---
tag: WBNFCTBQG2
kind: problem
type: answer
answer: "19"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Five girls and five boys participate in a tournament. Suppose that it is possible to number the girls from 1 to 5 and also the boys from 1 to 5 so that for all $1 \le i, j \le 5$, the number of students that the $i$-th girl and the $j$-th boy both know is exactly $|i - j|$. Let $S$ denote the maximum of the sum of the number of students that each girl knows and the sum of the number of students that each boy knows. What is the minimum possible value of $S$? Here we assume that the relationship of knowing is directional, that is, $A$ knows $B$ does not mean $B$ knows $A$. We also do not consider students to know themselves.
