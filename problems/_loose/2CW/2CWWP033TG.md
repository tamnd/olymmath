---
tag: 2CWWP033TG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h143942
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2007
    source: hf-ai-mo-aops
    label: 2007 Romania Team Selection Test
---
Let $S$ be the set of $n$ -uples $\left( x_{1}, x_{2}, \ldots, x_{n}\right)$ such that $x_{i}\in \{ 0, 1 \}$ for all $i \in \overline{1,n}$ , where $n \geq 3$ . Let $M(n)$ be the smallest integer with the property that any subset of $S$ with at least $M(n)$ elements contains at least three $n$ -uples $$\left( x_{1}, \ldots, x_{n}\right), \left( y_{1}, \ldots, y_{n}\right), \left( z_{1}, \ldots, z_{n}\right) $$ such that
$$\sum_{i=1}^{n}\left( x_{i}-y_{i}\right)^{2}= \sum_{i=1}^{n}\left( y_{i}-z_{i}\right)^{2}= \sum_{i=1}^{n}\left( z_{i}-x_{i}\right)^{2}. $$
(a) Prove that $M(n) \leq \left\lfloor \frac{2^{n+1}}{n}\right\rfloor+1$ .
(b) Compute $M(3)$ and $M(4)$ .
