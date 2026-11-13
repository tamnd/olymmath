---
tag: WME5MCY46G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h55856
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35786
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Let $ \left(a_{n}\right)$ be the sequence of reals defined by $ a_{1}=\frac{1}{4}$ and the recurrence $ a_{n}= \frac{1}{4}(1+a_{n-1})^{2}, n\geq 2$ . Find the minimum real $ \lambda$ such that for any non-negative reals $ x_{1},x_{2},\dots,x_{2002}$ , it holds
$$ \sum_{k=1}^{2002}A_{k}\leq \lambda a_{2002}, $$
where $ A_{k}= \frac{x_{k}-k}{(x_{k}+\cdots+x_{2002}+\frac{k(k-1)}{2}+1)^{2}}, k\geq 1$ .
