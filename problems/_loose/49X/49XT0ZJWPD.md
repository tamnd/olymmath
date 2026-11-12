---
tag: 49XT0ZJWPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h79387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
Define a sequence $\langle f(n)\rangle^{\infty}_{n=1}$ of positive integers by $f(1) = 1$ and $$f(n) = \begin{cases} f(n-1) - n & \text{ if } f(n-1) > n; f(n-1) + n & \text{ if } f(n-1) \leq n, \end{cases}$$
for $n \geq 2.$ Let $S = \{n \in \mathbb{N} \;\mid f(n) = 1993\}.$ **(i)** Prove that $S$ is an infinite set.**(ii)** Find the least positive integer in $S.$ **(iii)** If all the elements of $S$ are written in ascending order as $$ n_1 < n_2 < n_3 < \ldots , $$ show that $$ \lim_{i\rightarrow\infty} \frac{n_{i+1}}{n_i} = 3. $$
