---
tag: MQC8R0THYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h398955
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44135
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1996
    source: hf-ai-mo-aops
    label: 1996 Iran MO (3rd Round)
---
Let $n$ be a positive integer and suppose that $\phi(n)=\frac{n}{k}$ , where $k$ is the greatest perfect square such that $k \mid n$ . Let $a_1,a_2,\ldots,a_n$ be $n$ positive integers such that $a_i=p_1^{a_1i} \cdot p_2^{a_2i} \cdots p_n^{a_ni}$ , where $p_i$ are prime numbers and $a_{ji}$ are non-negative integers, $1 \leq i \leq n, 1 \leq j \leq n$ . We know that $p_i\mid \phi(a_i)$ , and if $p_i\mid \phi(a_j)$ , then $p_j\mid \phi(a_i)$ . Prove that there exist integers $k_1,k_2,\ldots,k_m$ with $1 \leq k_1 \leq k_2 \leq \cdots \leq k_m \leq n$ such that
$$\phi(a_{k_{1}} \cdot a_{k_{2}} \cdots a_{k_{m}})=p_1 \cdot p_2 \cdots p_n.$$
