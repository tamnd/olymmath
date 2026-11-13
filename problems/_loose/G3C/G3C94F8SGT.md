---
tag: G3C94F8SGT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any natural number $n = \overline{a_i...a_2a_1}$, consider the number $$T(n) =10 \sum_{i \, even} a_i+\sum_{i \, odd} a_i.$$ Let's find the smallest positive integer $A$ such that is sum of the natural numbers $n_1,n_2,...,n_{148}$ as well as of $m_1,m_2,...,m_{149}$ and matches the pattern:

$A=n_1+n_2+...+n_{148}=m_1+m_2+...+m_{149}$
$T(n_1)=T(n_2)=...=T(n_{148})$
$T(m_1)=T(m_2)=...=T(m_{148})$
