---
tag: TXG9ZK00BW
kind: problem
type: answer
answer: f(n) = g(p_1)^{e_1} g(p_2)^{e_2} \cdots g(p_k)^{e_k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all surjective functions $f: \mathbb{N}\to \mathbb{N}$ such that for all $m,n\in \mathbb{N}$: $$m \vert n \Longleftrightarrow f(m) \vert f(n).$$
