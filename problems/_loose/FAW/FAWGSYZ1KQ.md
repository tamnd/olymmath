---
tag: FAWGSYZ1KQ
kind: problem
type: answer
answer: "2018"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's consider the set

$$
U=\bigcup_{i=1}^{\infty} \mathcal{P}^{i}(\varnothing)
$$

where $\mathcal{P}(X)$ denotes the set of all subsets of the set $X$, and $\mathcal{P}^{i}(X)$ denotes the expression $\mathcal{P}(\mathcal{P}(\ldots \mathcal{P}(X) \ldots)$, where $\mathcal{P}$ is applied $i$ times.

For a given natural number $n$, we count how many $n$-element subsets $A$ of the set $U$ exist such that $A \subseteq \mathcal{P}(A)$. Is it possible for the result to consist of the digits $2, 0, 1$, and $8$ in some permutation?
