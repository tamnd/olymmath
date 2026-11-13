---
tag: D8G6QRD5JC
kind: problem
type: answer
answer: '{\varnothing,{\varnothing}}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a set $X$, denote $\mathscr{P}(X)=\{Y: Y \subseteq X\}$. (For example: $\mathscr{P}(\{1\})=$ $\{\varnothing,\{1\}\}$, because the subsets of the set $\{1\}$ are the sets $\varnothing$ and $\{1\} ; \mathscr{P}(\varnothing)=\{\varnothing\}$, because the set $\varnothing$ has exactly one subset, which is $\varnothing$.) We denote $\mathscr{P}^{n}(X)$ as the expression $\mathscr{P}(\mathscr{P}(\ldots \mathscr{P}(X) \ldots))$, where $\mathscr{P}$ is applied $n$ times. Find all two-element subsets $A$ of the set $\bigcup_{n=1}^{2018} \mathscr{P}^{n}(\varnothing)$ such that $A \subseteq \mathscr{P}(A)$.
