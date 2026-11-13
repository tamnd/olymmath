---
tag: 78BTRQ84JS
kind: problem
type: answer
answer: Seq(n) = Seq(\lfloor n/2 \rfloor) \cdot n \cdot Seq(\lfloor n/2 \rfloor)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive sequence is a finite sequence of positive integers. Sum of a sequence is the sum of all the elements in the sequence. We say that a sequence $A$ can be embedded into another sequence $B$, if there exists a strictly increasing function $$\phi : \{1,2, \ldots, |A|\} \rightarrow
\{1,2, \ldots, |B|\},$$ such that $\forall i \in \{1, 2, \ldots ,|A|\}$, $$A* \leq B[\phi(i)],$$ where $|S|$ denotes the length of
a sequence $S$. For example, $(1,1,2)$ can be embedded in $(1,2,3)$, but $(3,2,1)$ can not be in $(1,2,3)$\\
Given a positive integer $n$, construct a positive sequence $U$ with sum $O(n \log n)$, such that all the positive sequences with sum $n$, can be embedded into $U$.\\
