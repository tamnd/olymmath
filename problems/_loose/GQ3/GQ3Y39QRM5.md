---
tag: GQ3Y39QRM5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a dance, a group $S$ of 1994 students stand in a big circle. Each student claps the hands of each of his two neighbours a number of times. For each student $x$, let $f(x)$ be the total number of times $x$ claps the hands of his neighbours. As an example, suppose there are 3 students $A, B$ and $C$. A claps hand with $B$ two times, $B$ claps hand with $C$ three times and $C$ claps hand with $A$ five times. Then $f(A)=7, f(B)=5$ and $f(C)=8$.
(i) Prove that $\{f(x) \mid x \in S\} \neq\{n \mid n$ is an integer, $2 \leq n \leq 1995\}$.
(ii) Find an example in which
$$
\{f(x) \mid x \in S\}=\{n \mid n \text { is an integer, } n \neq 3,2 \leq n \leq 1996\} \text {. }
$$
