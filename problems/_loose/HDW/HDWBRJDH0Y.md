---
tag: HDWBRJDH0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Check the following properties of indicators $I_{A}=I_{A}(\omega)$:

$$
\begin{gathered}
I_{\varnothing}=0, I_{\Omega}=1, I_{\bar{A}}=1-I_{A}, \\
I_{A B}=I_{A} \cdot I_{B}, I_{A \cup B}=I_{A}+I_{B}-I_{A B}, \\
I_{A \backslash B}=I_{A}\left(1-I_{B}\right), I_{A \triangle B}=\left(I_{A}-I_{B}\right)^{2}=I_{A}+I_{B}(\bmod 2), \\
I_{\bigcap_{i=1}^{n} A_{i}}=1-\prod_{i=1}^{n}\left(1-I_{A_{i}}\right), I_{\bigcup_{i=1}^{n} A_{i}}=\prod_{i=1}^{n}\left(1-I_{A_{i}}\right), I_{\bigcup_{i=1}^{n} A_{i}}=\sum_{i=1}^{n} I_{A_{i}},
\end{gathered}
$$

where $A \triangle B$ is the symmetric difference of sets $A$ and $B$, i.e., the set $(A \backslash B) \cup (B \backslash A)$, and the sum $\sum$ denotes the union $(\cup)$ of disjoint events.
