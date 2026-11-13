---
tag: NQ3GQRP52B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{A}$ be a set of positive integers such that for a fixed positive $\alpha$,

$$
|\mathcal{A} \cap\{1,2, \ldots, n\}| \geq \alpha \cdot n
$$

holds for every $n>0$. Prove that there exists a constant $c$ depending on $\alpha$ such that every positive integer can be expressed as the sum of at most $c$ elements from $\mathcal{A}$.
