---
tag: S2J6KZDKAS
kind: problem
type: answer
answer: n-\operatorname{rank}A
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A, B \in \mathcal{M}_{n}(\mathbb{R})$.

b) Prove that there exists $a>0$ such that for every $\varepsilon \in(-a, a), \varepsilon \neq 0$, the matrix equation

$$
A X+\varepsilon X=B, X \in \mathcal{M}_{n}(\mathbb{R})
$$

has a unique solution $X(\varepsilon) \in \mathcal{M}_{n}(\mathbb{R})$.

b) Prove that if $B^{2}=I_{n}$ and $A$ is diagonalisable, then

$$
\lim _{\varepsilon \rightarrow 0} \varepsilon \cdot \operatorname{Tr}(B X(\varepsilon))=n-\operatorname{rank} A
$$
