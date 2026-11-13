---
tag: NM50P0BPJS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=58
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ denote a society of voters where each voter is endowed with preferences over a set of alternatives $A$ with $|N| = n > 2$, $|A| = m > 2$. A preference profile $R$ is an $n$-tuple of linear orderings on $A$ representing the preferences of voters on $A$. Given some $k \in \{1, 2, ..., m\}$, the $k$-plurality choice rule chooses the alternatives achieving the highest vote after each voter assigns equal votes for all top $k$ alternatives in his preference ordering regardless of their ranking. Let $R$ and $R'$ be any two preference profiles and $a \in A$. We say that $R'$ $a$-dominates $R$ iff for every $i \in N$, all alternatives which are ranked below $a$ in $R_i$ are also ranked below $a$ in $R'_i$. The $k$-plurality choice rule is said to be monotone iff for any $R$ and any $R'$ which $a$-dominates $R$, if $a \in A$ is chosen by the $k$-plurality choice rule in $R$, $a$ is still chosen in $R'$. Assume $(m, n) \ne (3, 4)$, prove that $k > \frac{m(n-1)}{n}$ is necessary and sufficient condition for the monotonicity of $k$-plurality choice rule. (Semih Koray).
