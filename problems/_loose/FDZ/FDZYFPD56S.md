---
tag: FDZYFPD56S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n\ge 2 $ be a positive integer and $ S= \{1,2,\cdots ,n\} $. Let two functions $ f:S \rightarrow \{1,-1\} $ and $ g:S \rightarrow S $ satisfy:

i) $ f(x)f(y)=f(x+y) , \forall x,y \in S $ \\
ii) $ f(g(x))=f(x) , \forall x \in S $\\
iii) $f(x+n)=f(x) ,\forall x \in S$\\
iv) $ g $ is bijective.\\

Find the number of pair of such functions $ (f,g)$ for every $n$.
