---
tag: BVSM63JEZ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that for any sequences of events $\left(A_{n}\right)$, $\left(B_{n}\right)$, the symmetric difference satisfies the following properties:

$$
\begin{gathered}
A_{1} \triangle B_{1}=\bar{A}_{1} \Delta \bar{B}_{1}, \\
\left(\bigcup_{n} A_{n}\right) \triangle\left(\bigcup_{n} B_{n}\right) \subseteq \bigcup_{n}\left(A_{n} \triangle B_{n}\right), \\
\left(\bigcap_{n} A_{n}\right) \triangle\left(\bigcap_{n} B_{n}\right) \subseteq \bigcup_{n}\left(A_{n} \Delta B_{n}\right) .
\end{gathered}
$$
