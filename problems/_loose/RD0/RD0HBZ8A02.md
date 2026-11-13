---
tag: RD0HBZ8A02
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a finite set with n elements and $\mathcal F$ a family of subsets of $S$ with the following property:
$$A\in\mathcal F,A\subseteq B\subseteq S\implies B\in\mathcal F.$$Prove that the function $f:[0,1]\to\mathbb R$ given by
$$f(t):=\sum_{A\in\mathcal F}t^{|A|}(1-t)^|S\setminus A|$$is nondecreasing ($|A|$ denotes the number of elements of $A$).
