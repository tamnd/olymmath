---
tag: XJN98C7ZFR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Soient $A_{1}, A_{2}, \ldots, A_{n}, B_{1}, B_{2}, \ldots, B_{n}$ des ensembles de $k$ éléments. Montrer que si $n < 2^{k-1}$ alors il existe des éléments $a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}$ tels que:
$$
a_{i} \in A_{i},\ b_{j} \in B_{j},\ a_{i} \neq b_{j}
$$
pour tout $1 \leqslant i, j \leqslant n$.
