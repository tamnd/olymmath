---
tag: RTQHNVJ7SG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2378333
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19298
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
For a positive integer $n$ , we will say that a sequence $a_1, a_2, \dots a_n$ where $a_i \in \{1, 2, \dots , n\}$ for all $i$ is $n$ *-highly divisible* if, for every positive integer $d$ that divides $n$ and every nonnegative integer $k$ less than $\frac{n}{d}$ we have that $$ d\;\Bigg\vert \sum_{i=kd+1}^{(k+1)d} a_i. $$ Let $\chi(n)$ be the probability that a sequence $a_1, a_2, \dots, a_n$ where $a_i$ is chosen randomly from $\{1, 2, \dots n\}$ independently for all $i$ is $n$ -highly divisible. Suppose that $n$ is a positive integer such that there exists a positive integer $m$ not divisible by 3 such that $3^{40}\chi(n)=\frac{1}{m}$ . Compute the sum of all possible values of $n$ .

*Proposed by Jaedon Whyte*
