---
tag: QEAFPMKN7N
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=145634
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt
    source: hf-mathnet
    label: United States HMMT February
---
Let $S=\{1,2,4,8,16,32,64,128,256\}$. A subset $P$ of $S$ is called squarely if it is nonempty and the sum of its elements is a perfect square. A squarely set $Q$ is called super squarely if it is not a proper subset of any squarely set. Find the number of super squarely sets.
(A set $A$ is said to be a proper subset of a set $B$ if $A$ is a subset of $B$ and $A \neq B$.)
