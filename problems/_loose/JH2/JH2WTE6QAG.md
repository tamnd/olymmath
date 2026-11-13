---
tag: JH2WTE6QAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=167
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
Soit $n \geqslant 5$ un entier. Soient $a_{1}, \ldots, a_{n}$ des entiers dans $\{1, \ldots, 2n\}$ deux à deux distincts. Montrer qu'il existe des indices $i, j \in \{1, \ldots, n\}$ avec $i \neq j$ tels que
$$
\operatorname{PPCM}\left(a_{i}, a_{j}\right) \leqslant 6\left(E\left(\frac{n}{2}\right)+1\right)
$$
où $E(x)$ désigne la partie entière du nombre $x$.
