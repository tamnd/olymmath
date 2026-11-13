---
tag: QX68TJ9B8C
kind: problem
type: answer
answer: "28"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$A$ and $B$ plays a game, with $A$ choosing a positive integer $n \in \{1, 2, \dots, 1001\} = S$. $B$ must guess the value of $n$ by choosing several subsets of $S$, then $A$ will tell $B$ how many subsets $n$ is in. $B$ will do this three times selecting $k_1, k_2$ then $k_3$ subsets of $S$ each.

What is the least value of $k_1 + k_2 + k_3$ such that $B$ has a strategy to correctly guess the value of $n$ no matter what $A$ chooses?
