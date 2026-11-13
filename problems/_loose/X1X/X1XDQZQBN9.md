---
tag: X1XDQZQBN9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0000.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union ASU
---
Given real numbers $a_i$, $b_i$ and positive reals $c_i$, $d_i$, let $e_{ij} = (a_i + b_j) / (c_i + d_j)$. Let $M_i = \max_{0 \leq j \leq n} e_{ij}$, $m_j = \min_{1 \leq i \leq n} e_{ij}$. Show that we can find an $e_{ij}$ with $1 \leq i, j \leq n$ such that $e_{ij} = M_i = m_j$.
