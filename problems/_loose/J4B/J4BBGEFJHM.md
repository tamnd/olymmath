---
tag: J4BBGEFJHM
kind: problem
type: answer
answer: (1,5),(2,2),(3,1),(6,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A(m)=\left(\begin{array}{ccc}1 & 0 & 0 \\ m & 1 & 1 \\ 1 & 0 & 0\end{array}\right) \in M_{3}(\mathrm{R})$ and $G=\{A(m) \mid m \in \mathrm{Z}\}$.

a) Show that $(G, \cdot)$ is a group

b) Show that $(G, \cdot)$ is isomorphic to the group $(\mathbb{Z},+)$

c) Solve the equation $(A(m))^{n}=A(5), m \in \mathbb{Z}, n \in \mathbb{N}^{*}$
