---
tag: 1N5M3YBD5T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h607527
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2014
    source: hf-ai-mo-aops
    label: 2014 IberoAmerican
---
Given a set $X$ and a function $f: X \rightarrow X$ , for each $x \in X$ we define $f^1(x)=f(x)$ and, for each $j \ge 1$ , $f^{j+1}(x)=f(f^j(x))$ . We say that $a \in X$ is a fixed point of $f$ if $f(a)=a$ . For each $x \in \mathbb{R}$ , let $\pi (x)$ be the quantity of positive primes lesser or equal to $x$ .

Given an positive integer $n$ , we say that $f: \{1,2, \dots, n\} \rightarrow \{1,2, \dots, n\}$ is *catracha* if $f^{f(k)}(k)=k$ , for every $k=1, 2, \dots n$ . Prove that:

(a) If $f$ is catracha, $f$ has at least $\pi (n) -\pi (\sqrt{n}) +1$ fixed points.
(b) If $n \ge 36$ , there exists a catracha function $f$ with exactly $ \pi (n) -\pi (\sqrt{n}) + 1$ fixed points.
