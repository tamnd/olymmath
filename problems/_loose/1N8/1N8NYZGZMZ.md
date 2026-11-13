---
tag: 1N8NYZGZMZ
kind: problem
type: answer
answer: (p-1)a + a^{m - (p-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ be a positive integer and $a$ a positive real number. Find the greatest value of $a^{m_1}+a^{m_2}+\ldots+a^{m_p}$ where $m_1+m_2+\ldots+m_p=m, m_i\in\mathbb{N},i=1,2,\ldots,p;$ $1\leq p\leq m, p\in\mathbb{N}$.
