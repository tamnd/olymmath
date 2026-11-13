---
tag: MPBHDP7KCH
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n \in \mathbf{N}, n>4$, the set $A=$ $\{1,2, \cdots, n\}$. Let the positive integer $m$ and the sets $A_{1}, A_{2}, \cdots$, $A_{m}$ have the following properties:
(1) $\bigcup_{i=1}^{m} A_{i}=A$;
(2) $\left|A_{i}\right|=4(i=1,2, \cdots, m)$;
(3) $X_{1}, X_{2}, \cdots, X_{\mathrm{C}_{n}^{2}}$ are all the two-element subsets of $A$, for any $X_{k}\left(k=1,2, \cdots, \mathrm{C}_{n}^{2}\right)$, there exists a unique $j_{k} \in\{1,2, \cdots, m\}$, such that $X_{k} \subseteq A_{j_{k}}$.
Find the minimum value of $n$.
