---
tag: 6KR4J1YAY2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h524533
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Let $\mathcal F$ be the set of all $2013 \times 2013$ arrays whose entries are $0$ and $1$ . A transformation $K : \mathcal F \to \mathcal F$ is defined as follows: for each entry $a_{ij}$ in an array $A \in \mathcal F$ , let $S_{ij}$ denote the sum of all the entries of $A$ sharing either a row or column (or both) with $a_{ij}$ . Then $a_{ij}$ is replaced by the remainder when $S_{ij}$ is divided by two.

Prove that for any $A \in \mathcal F$ , $K(A) = K(K(A))$ .

*Proposed by Aaron Lin*
