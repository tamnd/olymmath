---
tag: RBF0QH1MGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3689018
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2025
    source: hf-ai-mo-aops
    label: 2025 Indonesia MO
---
Let $(a_n)_{n \ge 1}$ and $(b_n)_{n\ge 1}$ be sequences of positive real numbers such that $a_1, b_1<5$ and for any positive integer $n$ ,
$$ a_{n+1} = \frac{b_n + \sqrt{a_nb_n}}{2} \text{ and } b_{n+1} = \sqrt{\frac{a_n(a_n+b_n)}{2} }.$$
Prove that
$$ |a_{20}-b_{20}| < \frac{1}{2025}. $$

*Proposed by Valentio Iverson*
