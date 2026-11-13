---
tag: 88K5KVA4SF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209511
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=99
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be sets with $2011^2$ and $2010$ elements, respectively. Show that there is a function $f:A \times A \to B$ satisfying the condition $f(x,y)=f(y,x)$ for all $(x,y) \in A \times A$ such that for every function $g:A \to B$ there exists $(a_1,a_2) \in A \times A$ with $g(a_1)=f(a_1,a_2)=g(a_2)$ and $a_1 \neq a_2.$
