---
tag: 82SKG2DT1F
kind: problem
type: answer
answer: K(n)=2^{\varphi(n)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At the vertices of a regular $n$-gon with center at point $O$, numbers $(+1)$ and $(-1)$ are placed. In one step, it is allowed to change the sign of all numbers located at the vertices of any regular $k$-gon with center $O$ (we also allow 2-gons, understanding a 2-gon as a segment with midpoint at point $O$). Prove that in cases a), b), c) there exists an initial arrangement of $(+1)$ and $(-1)$ such that it is impossible to obtain a set of all $(+1)$ in any number of steps:

a) $n=15$

b) $n=30$

c) $n$ is any number greater than 2;

d)* Try to explain for an arbitrary $n$, what is the largest number $K(n)$ of different arrangements of $(+1)$ and $(-1)$, among which none can be obtained from another in several steps. Prove, for example, that $K(200)=2^{80}$.
