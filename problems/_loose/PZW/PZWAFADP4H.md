---
tag: PZWAFADP4H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947265
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18161
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
For an ordered pair $(m,n)$ of distinct positive integers, suppose, for some nonempty subset $S$ of $\mathbb R$ , that a function $f:S \rightarrow S$ satisfies the property that $f^m(x) + f^n(y) = x+y$ for all $x,y\in S$ . (Here $f^k(z)$ means the result when $f$ is applied $k$ times to $z$ ; for example, $f^1(z)=f(z)$ and $f^3(z)=f(f(f(z)))$ .) Then $f$ is called \emph{ $(m,n)$ -splendid}. Furthermore, $f$ is called \emph{ $(m,n)$ -primitive} if $f$ is $(m,n)$ -splendid and there do not exist positive integers $a\le m$ and $b\le n$ with $(a,b)\neq (m,n)$ and $a \neq b$ such that $f$ is also $(a,b)$ -splendid. Compute the number of ordered pairs $(m,n)$ of distinct positive integers less than $10000$ such that there exists a nonempty subset $S$ of $\mathbb R$ such that there exists an $(m,n)$ -primitive function $f: S \rightarrow S$ .

*Proposed by Vincent Huang*
