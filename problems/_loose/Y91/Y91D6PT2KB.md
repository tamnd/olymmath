---
tag: Y91D6PT2KB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1899498
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27930
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1984 Tournament Of Towns
---
Let $p(n)$ be the number of partitions of the natural number $n$ into natural summands. The diversity of a partition is by definition the number of different summands in it. Denote by $q(n)$ the sum of the diversities of all the $p(n) $ partitions of $n$ .
(For example, $p(4) = 5$ , the five distinct partitions of $4$ being $4, 3 + 1, 2+2, 2 + 1 + 1, 1 + 1 + 1 + 1,$ and $g(4) =1 + 2+1+ 2+1 = 7$ .)
Prove that, for all natural numbers $n$ ,
(a) $q(n)= 1 + P(1) + P(2) + p(3) + ...+ p(n -1)$ ,
(b) $q(n) < \sqrt{2n} p(n)$ .

(AV Zelevinskiy, Moscow)
