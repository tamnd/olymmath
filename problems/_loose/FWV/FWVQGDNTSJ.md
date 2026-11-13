---
tag: FWVQGDNTSJ
kind: problem
type: answer
answer: "69"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The tenth question, set $\mathrm{X}=\{1,2, \ldots, 100\}$, function $\mathrm{f}: \mathrm{X} \rightarrow \mathrm{X}$ simultaneously satisfies: (1) For any $\mathrm{x} \in \mathrm{X}$, $f(x) \neq x$; (2) For any 40-element subset $A$ of $X$, there is $A \cap f(A) \neq \Phi$.

Find the smallest positive integer $\mathrm{k}$, such that for any function $\mathrm{f}$ satisfying the above conditions, there exists a $\mathrm{k}$-element subset $B$ of $\mathrm{X}$, such that $B \cup f(B)=X$. (Note: For a subset $T$ of $X$, define $f(T)=\{x \mid x=f(t), t \in T\}$.)
