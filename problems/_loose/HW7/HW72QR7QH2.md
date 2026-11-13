---
tag: HW72QR7QH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $A$ and $E$ are a pair of opposite vertices of a regular octagon. A frog starts jumping from point $A$. If the frog is at any vertex other than $E$, it can jump to one of the two adjacent vertices, and when it jumps to point $E$, it stops there. Let $e_{n}$ be the number of different paths that reach point $E$ after $n$ jumps. Prove that
$$
e_{2 n-1}=0, e_{2 n}=\frac{1}{\sqrt{2}}\left(x^{n-1}-y^{n-1}\right), n=1,2, \cdots,
$$

where $x=2+\sqrt{2}, y=2-\sqrt{2}$.
Note: An $n$-step path is a sequence of vertices $\left(P_{0}, P_{1}, \cdots, P_{n}\right)$ that satisfies the following conditions:
(1) $P_{0}=A, P_{n}=E$;
(2) For each $i, 0 \leqslant i \leqslant n-1, P_{i} \neq E$;
(3) For each $i, 0 \leqslant i \leqslant n-1, P_{i}$ and $P_{i+1}$ are two adjacent vertices of the regular octagon.
