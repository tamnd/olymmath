---
tag: C4QF5FG67R
kind: problem
type: answer
answer: All integers n ≥ 2 except n = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th NMO
---
For each integer $n \ge 2$, we consider the set of all $n$-th roots of unity $U_n = \{z \in \mathbb{C} \mid z^n = 1\}$. Determine the integers $n \ge 2$ for which there exist $x, y \in U_n$, $x \ne y$ such that $x + y \notin U_k$ for any integer $k \ge 2$.
