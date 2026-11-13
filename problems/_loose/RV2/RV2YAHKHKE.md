---
tag: RV2YAHKHKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X = \{(x,y) \in \mathbb{R}^2 | y \geq 0, x^2+y^2 = 1\} \cup \{(x,0),-1\leq x\leq 1\} $ be the edge of the closed semicircle with radius 1.

a) Let $n>1$ be an integer and $P_1,P_2,\dots,P_n \in X$. Show that there exists a permutation $\sigma \colon \{1,2,\dots,n\}\to \{1,2,\dots,n\}$ such that
$$\sum_{j=1}^{n}|P_{\sigma(j+1)}-P_{\sigma(j)}|^2\leq 8$$.

Where $\sigma(n+1) = \sigma(1)$.

b) Find all sets $\{P_1,P_2,\dots,P_n \} \subset X$ such that for any permutation $\sigma \colon \{1,2,\dots,n\}\to \{1,2,\dots,n\}$,
$$\sum_{j=1}^{n}|P_{\sigma(j+1)}-P_{\sigma(j)}|^2 \geq 8$$.

Where $\sigma(n+1) = \sigma(1)$.
