---
tag: D8K69JXZN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h583655
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
We know $\mathbb Z_{210} \cong \mathbb Z_2 \times \mathbb Z_3 \times \mathbb Z_5 \times \mathbb Z_7$ .
Moreover,\begin{align*}
53 & \equiv 1 \pmod{2}
53 & \equiv 2 \pmod{3}
53 & \equiv 3 \pmod{5}
53 & \equiv 4 \pmod{7}.
\end{align*}
Let
$$ M = \left(
\begin{array}{ccc}
53 & 158 & 53
23 & 93 & 53
50 & 170 & 53
\end{array}
\right). $$
Based on the above, find $\overline{(M \mod{2})(M \mod{3})(M \mod{5})(M \mod{7})}$ .
