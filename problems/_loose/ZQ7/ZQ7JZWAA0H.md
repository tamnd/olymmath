---
tag: ZQ7JZWAA0H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h499047
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Iran MO (3rd Round)
---
Let $p$ be a prime number. We know that each natural number can be written in the form
$$\sum_{i=0}^{t}a_ip^i (t,a_i \in \mathbb N\cup \{0\},0\le a_i\le p-1)$$
Uniquely.

Now let $T$ be the set of all the sums of the form
$$\sum_{i=0}^{\infty}a_ip^i (0\le a_i \le p-1).$$

(This means to allow numbers with an infinite base $p$ representation). So numbers that for some $N\in \mathbb N$ all the coefficients $a_i, i\ge N$ are zero are natural numbers. (In fact we can consider members of $T$ as sequences $(a_0,a_1,a_2,...)$ for which $\forall_{i\in \mathbb N}: 0\le a_i \le p-1$ .) Now we generalize addition and multiplication of natural numbers to this set so that it becomes a ring (it's not necessary to prove this fact). For example: $1+(\sum_{i=0}^{\infty} (p-1)p^i)=1+(p-1)+(p-1)p+(p-1)p^2+...$ $=p+(p-1)p+(p-1)p^2+...=p^2+(p-1)p^2+(p-1)p^3+...$ $=p^3+(p-1)p^3+...=...$ So in this sum, coefficients of all the numbers $p^k, k\in \mathbb N$ are zero, so this sum is zero and thus we can conclude that $\sum_{i=0}^{\infty}(p-1)p^i$ is playing the role of $-1$ (the additive inverse of $1$ ) in this ring. As an example of multiplication consider
$$(1+p)(1+p+p^2+p^3+...)=1+2p+2p^2+\cdots$$

Suppose $p$ is $1$ modulo $4$ . Prove that there exists $x\in T$ such that $x^2+1=0$ .

*Proposed by Masoud Shafaei*
