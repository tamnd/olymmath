---
tag: 75FPCQTS0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1276387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14083
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2016
    source: hf-ai-mo-aops
    label: 2016 India IMO Training Camp
---
Let $n$ be a natural number. We define sequences $\langle a_i\rangle$ and $\langle b_i\rangle$ of integers as follows. We let $a_0=1$ and $b_0=n$ . For $i>0$ , we let $$ \left( a_i,b_i\right)=\begin{cases} \left(2a_{i-1}+1,b_{i-1}-a_{i-1}-1\right) & \text{if } a_{i-1}<b_{i-1},
\left( a_{i-1}-b_{i-1}-1,2b_{i-1}+1\right) & \text{if } a_{i-1}>b_{i-1},
\left(a_{i-1},b_{i-1}\right) & \text{if } a_{i-1}=b_{i-1}.\end{cases} $$ Given that $a_k=b_k$ for some natural number $k$ , prove that $n+3$ is a power of two.
