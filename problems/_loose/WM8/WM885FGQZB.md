---
tag: WM885FGQZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h362402
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5123
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
**interesting function** $S$ is a set with $n$ elements and $P(S)$ is the set of all subsets of $S$ and $f : P(S) \rightarrow \mathbb N$ is a function with these properties:
for every subset $A$ of $S$ we have $f(A)=f(S-A)$ .
for every two subsets of $S$ like $A$ and $B$ we have $max(f(A),f(B))\ge f(A\cup B)$ prove that number of natural numbers like $x$ such that there exists $A\subseteq S$ and $f(A)=x$ is less than $n$ .

time allowed for this question was 1 hours and 30 minutes.
