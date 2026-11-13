---
tag: 7E2BBSJDKD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is given function $f : A \rightarrow \mathbb{R}$, $(A\subseteq \mathbb{R})$ such that $$f(x+y)=f(x)\cdot f(y)-f(xy)+1; (\forall x,y \in A)$$ If $f : A \rightarrow \mathbb{R}$, $(\mathbb{N} \subseteq A\subseteq \mathbb{R})$ is solution of given functional equation, prove that: $$f(n)=\begin{cases}
\frac{c^{n+1}-1}{c-1} \text{, } \forall n \in \mathbb{N}, c \neq 1 \\
n+1 \text{, } \forall n \in \mathbb{N}, c = 1
\end{cases}$$
where $c=f(1)-1$
$a)$ Solve given functional equation for $A=\mathbb{N}$
$b)$ With $A=\mathbb{Q}$, find all functions $f$ which are solutions of the given functional equation and also $f(1997) \neq f(1998)$
