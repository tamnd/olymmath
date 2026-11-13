---
tag: PAD67Z1JRQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an odd prime number $p$ and $p$ consecutive positive integers $m_1,m_2,…,m_p$.
Choose a permutation $\sigma$ of $1,2,…,p$ .
Show that there exist two different numbers $k,l\in{(1,2,…,p)}$ such that
$p\mid{m_k.m_{\sigma(k)}-m_l.m_{\sigma(l)}}$
