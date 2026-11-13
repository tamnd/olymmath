---
tag: Q6EWEVAFS6
kind: problem
type: answer
answer: \frac{n!}{(n-k)!(2k-n)!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Z=\{1,2, \cdots, n\}, k$ be a positive integer, $\frac{n}{2} \leqslant k \leqslant n$, find the number of mappings $f: Z \rightarrow Z$ that satisfy the following conditions:
(i) $f^{2}=f$;
(ii) The image of $f(x)$, $f(Z)$, contains exactly $k$ distinct elements;
(iii) For each $y \in f(Z)$, there are at most two $x \in Z$ such that $f(x)=y$.
