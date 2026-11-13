---
tag: VCXRZ6K9A1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6・72 Let $U$ be a finite set, and $f, g$ be bijections from $U$ to itself. Let
$$
\begin{array}{l}
S=\{W \in U: f(f(w))=g(g(w))\}, \\
T=\{W \in U: f(g(w))=g(f(w))\} .
\end{array}
$$

and assume $U=S \cup T$. Prove that for $W \in U, f(w) \in S$ if and only if $g(w) \in S$.
