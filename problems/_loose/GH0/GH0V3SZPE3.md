---
tag: GH0V3SZPE3
kind: problem
type: answer
answer: "63"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 3$ be a positive integer. Suppose that $\Gamma$ is a unit circle passing through a point $A$. A regular $3$-gon, regular $4$-gon, \dots, regular $n$-gon are all inscribed inside $\Gamma$ such that $A$ is a common vertex of all these regular polygons. Let $Q$ be a point on $\Gamma$ such that $Q$ is a vertex of the regular $n$-gon, but $Q$ is not a vertex of any of the other regular polygons. Let $\mathcal{S}_n$ be the set of all such points $Q$. Find the number of integers $3 \le n \le 100$ such that
$$
\prod_{Q \in \mathcal{S}_n} |AQ| \le 2.
$$
