---
tag: HQ2R1S9MRR
kind: problem
type: answer
answer: "180"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be a set composed of a finite number of positive integers, and $M=U_{i=1}^{20} A_{i}=U_{i=1}^{20} B_{i}$, where $A_{i} \neq \emptyset$, $B_{i} \neq \emptyset, i=1, 2, \ldots, 20$, and for any $1 \leq i<j \leq 20$, we have $A_{i} \cap A_{j}=\emptyset, B_{i} \cap B_{j}=\emptyset$.

It is known that for any $1 \leq i \leq 20,1 \leq j \leq 20$, if $A_{i} \cap B_{j}=\emptyset$, then $\left|A_{i} \cup B_{j}\right| \geq 18$, find the minimum number of elements in the set $M$.
