---
tag: Z9F1PDZ7EX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h533030
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9576
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2013
    source: hf-ai-mo-aops
    label: 2013 India IMO Training Camp
---
We define an operation $\oplus$ on the set $\{0, 1\}$ by
$$ 0 \oplus 0 = 0 \,, 0 \oplus 1 = 1 \,, 1 \oplus 0 = 1 \,, 1 \oplus 1 = 0 \,.$$
For two natural numbers $a$ and $b$ , which are written in base $2$ as $a = (a_1a_2 \ldots a_k)_2$ and $b = (b_1b_2 \ldots b_k)_2$ (possibly with leading 0's), we define $a \oplus b = c$ where $c$ written in base $2$ is $(c_1c_2 \ldots c_k)_2$ with $c_i = a_i \oplus b_i$ , for $1 \le i \le k$ . For example, we have $7 \oplus 3 = 4$ since $ 7 = (111)_2$ and $3 = (011)_2$ .

For a natural number $n$ , let $f(n) = n \oplus \left[ n/2 \right]$ , where $\left[ x \right]$ denotes the largest integer less than or equal to $x$ . Prove that $f$ is a bijection on the set of natural numbers.
