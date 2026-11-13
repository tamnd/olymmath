---
tag: WNTJAN6G22
kind: problem
type: answer
answer: 1^{2012}+2^{2012}+\cdots+19^{2012}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{1,2, \cdots, 2012\}$,
$$
B=\{1,2, \cdots, 19\},
$$

and let $S$ be the set of all subsets of $A$. Find the number of mappings $f: S \rightarrow B$ such that
$$
f\left(A_{1} \cap A_{2}\right)=\min \left\{f\left(A_{1}\right), f\left(A_{2}\right)\right\}
$$

for any $A_{1}, A_{2} \in S$. ${ }^{[2]}$
