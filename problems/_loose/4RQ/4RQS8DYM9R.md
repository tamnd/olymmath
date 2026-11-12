---
tag: 4RQS8DYM9R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2522659
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20568
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 2
---
Let $\|x\|_*=(|x|+|x-1|-1)/2$ . Find all $f:\mathbb{N}\to\mathbb{N}$ such that
$$f^{(\|f(x)-x\|_*)}(x)=x, \forall x\in\mathbb{N}.$$
Here $f^{(0)}(x)=x$ and $f^{(n)}(x)=f(f^{(n-1)}(x))$ for all $n\in\mathbb{N}$ .

*Proposed by usjl*
