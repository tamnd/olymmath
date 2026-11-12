---
tag: WS5ECDZ3AV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1276382
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14081
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
Let $n$ be a natural number. A sequence $x_1,x_2, \cdots ,x_{n^2}$ of $n^2$ numbers is called $n-\textit{good}$ if each $x_i$ is an element of the set $\{1,2,\cdots ,n\}$ and the ordered pairs $\left(x_i,x_{i+1}\right)$ are all different for $i=1,2,3,\cdots ,n^2$ (here we consider the subscripts modulo $n^2$ ). Two $n-$ good sequences $x_1,x_2,\cdots ,x_{n^2}$ and $y_1,y_2,\cdots ,y_{n^2}$ are called $\textit{similar}$ if there exists an integer $k$ such that $y_i=x_{i+k}$ for all $i=1,2,\cdots,n^2$ (again taking subscripts modulo $n^2$ ). Suppose that there exists a non-trivial permutation (i.e., a permutation which is different from the identity permutation) $\sigma$ of $\{1,2,\cdots ,n\}$ and an $n-$ good sequence $x_1,x_2,\cdots,x_{n^2}$ which is similar to $\sigma\left(x_1\right),\sigma\left(x_2\right),\cdots ,\sigma\left(x_{n^2}\right)$ . Show that $n\equiv 2\pmod{4}$ .
