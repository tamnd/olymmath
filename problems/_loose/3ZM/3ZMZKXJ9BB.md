---
tag: 3ZMZKXJ9BB
kind: problem
type: answer
answer: '|S| - n'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=82
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 65th NMO Selection Tests for BMO and IMO
---
Let $n$ be an integer greater than $1$ and let $S$ be a finite set containing more than $n+1$ elements. Consider the collection of all sets $\mathcal{A}$ of subsets of $S$ satisfying the following two conditions:
(a) Each member of $\mathcal{A}$ contains at least $n$ elements of $S$; and
(b) Each element of $S$ is contained in at least $n$ members of $\mathcal{A}$.
Determine $\max_{\mathcal{A}} \min_{\mathcal{B}} |\mathcal{B}|$, as $\mathcal{B}$ runs through all subsets of $\mathcal{A}$ whose members cover $S$, and $\mathcal{A}$ runs through the above collection.
