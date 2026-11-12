---
tag: FCKTCEEHQK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [91].) Let $\left(\mathscr{A}_{n}\right)_{n \geqslant 1}$ be a strictly increasing sequence of algebras, i.e., $\mathscr{A}_{n} \subset \mathscr{A}_{n+1}, n \geqslant 1$. Show that $\mathscr{A}=\bigcup_{n} \mathscr{A}_{n}$ is an algebra.

It is not difficult to provide an example of $\sigma$-algebras $\mathscr{A}_{n}$ for which $\mathscr{A}$ is not a $\sigma$-algebra. However, a much stronger statement holds: for any algebras $\mathscr{A}_{n}$ (strictly increasing in $n$), $\mathscr{A}$ cannot be a $\sigma$-algebra.

Remark. The last statement remains valid if, instead of nested algebras $\mathscr{A}_{n}$, we consider nested $\pi$-systems of sets, i.e., systems closed under finite intersections (see the proof below).
