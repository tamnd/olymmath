---
tag: SC31V5C6QH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u_k$, $v_k$, $a_k$ and $b_k$ be non-negative real sequences such as $u_k > a_k$ and $v_k > b_k$, where $k = 1, 2,\cdots , n$. If $0 < m_1 \leq u_k \leq M_1$ and $0 < m_2 \leq v_k \leq M_2$, then $$\sum \limits_{k=1}^n(lu_kv_k-a_kb_k)\geq \left(\sum \limits_{k=1}^n\left(u_k^2-a_k^2\right)\right)^\frac{1}{2}\left(\sum \limits_{k=1}^n\left(v_k^2-b_k^2\right)\right)^\frac{1}{2}$$where$$l=\frac{M_1M_2+m_1m_2}{2\sqrt{m_1M_1m_2M_2}}$$
