---
tag: SF02ZVHBTZ
kind: problem
type: answer
answer: '|F|=\sum_{i=1}^{|B|}i^{|A|}=\sum_{i=1}^{|B|}(|B|-i+1)^{|A|}=|G|'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $A, B \subseteq \mathbf{N}$ as finite non-empty sets, $P(A)$ is the set of all subsets of $A$. $F$ is the set of all functions $f$ such that $f: P(A) \rightarrow B$, satisfying
$$
f(X \cap Y)=\min \{f(X), f(Y)\}(X, Y \subset A),
$$
$G$ is the set of all functions $g$ such that $g: P(A) \rightarrow$ $B$, satisfying
$$
g(X \cup Y)=\max \{g(X), g(Y)\}(X, Y \subset A) \text {. }
$$

Prove: $|F|=|G|$, and find $|F|$.
