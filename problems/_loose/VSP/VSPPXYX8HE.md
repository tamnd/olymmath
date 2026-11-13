---
tag: VSPPXYX8HE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{n} \in \mathrm{Z}^{+}, \mathrm{n} \geq 4, \mathrm{p} \geq \mathrm{n}-2$ be a prime number. $\mathrm{M}$ is a set of $\mathrm{n}$ points in the plane, with no three points collinear, and the mapping $f: \mathrm{M} \rightarrow \{0,1, \ldots, \mathrm{p}-1\}$ satisfies the following conditions:
(1) Only one point is mapped to 0;
(2) If $A, B, C$ are three distinct points in $M$, and $K$ is the circumcircle of $\triangle A B C$, then $\sum_{P \in M \cap K} f(P) \equiv 0 \pmod{p}$.
Prove that all points in $M$ lie on the same circle.
