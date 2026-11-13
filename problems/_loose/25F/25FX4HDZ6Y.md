---
tag: 25FX4HDZ6Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221947
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabian Mathematical Competitions
---
Let $F$ is the set of all sequences $\{(a_1, a_2, . . . , a_{2020})\}$ with $a_i \in \{-1, 1\}$ for all $i = 1,2,...,2020$. Prove that there exists a set $S$, such that $S \subset F$, $|S| = 2020$ and for any $(a_1,a_2,...,a_{2020}) \in F$ there exists $(b_1,b_2,...,b_{2020}) \in S$, such that $\sum_{i=1}^{2020} a_ib_i = 0$.
