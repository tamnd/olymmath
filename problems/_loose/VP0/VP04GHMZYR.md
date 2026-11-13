---
tag: VP04GHMZYR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124839
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}, B=\left\{b_{1}, b_{2}, \cdots, b_{n}\right\}$ be two sets of positive integers, and $|A \cap B|=1, C=\{A$'s all two-element subsets $\} \cup\{B$'s all two-element subsets $\}$, function $f: A \cup B \rightarrow\left\{0,1,2, \cdots, 2 \mathrm{C}_{n}^{2}\right\}$ is an injection. For any $\{x, y\} \in C$, the number $|f(x)-f(y)|$ is called a label of $\{x, y\}$. Prove: when $n \geqslant 6$, there are at least two elements in $C$ with the same label.
