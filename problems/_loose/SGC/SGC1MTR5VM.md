---
tag: SGC1MTR5VM
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n=2017$ and $x_1,\dots,x_n$ be boolean variables. An \emph{$7$-CNF clause} is an expression of the form $\phi_1(x_{i_1})+\dots+\phi_7(x_{i_7})$, where $\phi_1,\dots,\phi_7$ are each either the function $f(x)=x$ or $f(x)=1-x$, and $i_1,i_2,\dots,i_7\in\{1,2,\dots,n\}$. For example, $x_1+(1-x_1)+(1-x_3)+x_2+x_4+(1-x_3)+x_{12}$ is a $7$-CNF clause. What's the smallest number $k$ for which there exist $7$-CNF clauses $f_1,\dots,f_k$ such that $$f(x_1,\dots,x_n):=f_1(x_1,\dots,x_n)\cdots f_k(x_1,\dots,x_n)$$ is $0$ for all values of $(x_1,\dots,x_n)\in\{0,1\}^n$?
