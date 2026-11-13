---
tag: BSTAR5MPY0
kind: problem
type: answer
answer: \sum_{j=0}^{n}v(\mathcal{S}_j)C(\mathcal{S}_j)=v(\mathcal{S})C(\mathcal{S})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. An $n-\emph{simplex}$ in $\mathbb{R}^n$ is given by $n+1$ points $P_0, P_1,\cdots , P_n$, called its vertices, which do not all belong to the same hyperplane. For every $n$-simplex $\mathcal{S}$ we denote by $v(\mathcal{S})$ the volume of $\mathcal{S}$, and we write $C(\mathcal{S})$ for the center of the unique sphere containing all the vertices of $\mathcal{S}$.
Suppose that $P$ is a point inside an $n$-simplex $\mathcal{S}$. Let $\mathcal{S}_i$ be the $n$-simplex obtained from $\mathcal{S}$ by replacing its $i^{\text{th}}$ vertex by $P$. Prove that :
$$ \sum_{j=0}^{n}v(\mathcal{S}_j)C(\mathcal{S}_j)=v(\mathcal{S})C(\mathcal{S}) $$
