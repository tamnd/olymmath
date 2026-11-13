---
tag: X55BSHGPM7
kind: problem
type: answer
answer: f0(n) = ⌈log2 |n|⌉ + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let $F$ be the set of all functions $f: \mathbb{Z} \setminus \{0\} \to \mathbb{N}^*$ with the following property: If $a, b \in \mathbb{Z} \setminus \{0\}$ and $a$ is not divisible by $b$ then there exist integers $r, s$ such that $a = br + s$ and $f(s) < f(b)$.
Find all functions $f_0 \in F$ such that $\forall f \in F, \forall n \in \mathbb{Z} \setminus \{0\}$, we have $f_0(n) \le f(n)$.
