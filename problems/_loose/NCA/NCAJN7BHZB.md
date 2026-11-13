---
tag: NCAJN7BHZB
kind: problem
type: answer
answer: floor(2n/m) + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $m \ge 2$, $n \ge 2$, consider the set
$$
S(m, n) = \left\{ \mathbf{x} = (x_1, x_2, \dots, x_m) ; \mathbf{x} \in \mathbb{Z}_+^m, \sum_{k=1}^m x_k = n \right\}.
$$
Determine $N(m, n)$, the largest cardinality $|X|$ of a subset $X \subseteq S(m, n)$ with
$$
|X| = |\{x_k ; \mathbf{x} \in X\}|, \text{ for all } k = 1, 2, \dots, m.
$$
Vasile Pop & Dan Schwarz
