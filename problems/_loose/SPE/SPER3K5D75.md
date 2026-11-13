---
tag: SPER3K5D75
kind: problem
type: answer
answer: f(n)=[\log_{2}n]+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N=\{1,2, \cdots, n\}(n \geqslant 2), N$'s subsets $A_{1}, A_{2}, \cdots, A_{t}$ form a family of sets $F$. If for any $i, j \in N$, $i \neq j$ there exists a set $A_{k}$ such that $A_{k} \cap\{i, j\}$ contains exactly one element, then $F$ is called distinguishable. If each element of $N$ belongs to at least one subset $A_{i} \in F$, then $F$ is called covering. What is the minimum value of $t$, denoted as $f(n)$, such that a family of sets $F=\left\{A_{1}, A_{2}, \cdots, A_{i}\right\}$ is both distinguishable and covering?
（29th IMO Shortlist Problem）
