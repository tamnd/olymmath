---
tag: A13GZXYS03
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $S_{r}(n)$ as the sum of the digits of $n$ in base $r (r>1)$. For example,
$$
38=(1102)_{3}, S_{3}(38)=1+1+0+2=4 \text {. }
$$

Prove: (1) For any $r>2$, there exists a prime $p$, such that for any positive integer $n$, $S_{r}(n) \equiv n(\bmod p)$;
(2) For any $r>1$ and prime $p$, there exist infinitely many positive integers $n$ satisfying $S_{r}(n) \equiv n(\bmod p)$.
