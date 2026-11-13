---
tag: BRS67BPSEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h3046874
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1196
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 2
---
For each positive integer $k$ greater than $1$ , find the largest real number $t$ such that the following hold:
Given $n$ distinct points $a^{(1)}=(a^{(1)}_1,\ldots, a^{(1)}_k)$ , $\ldots$ , $a^{(n)}=(a^{(n)}_1,\ldots, a^{(n)}_k)$ in $\mathbb{R}^k$ , we define the score of the tuple $a^{(i)}$ as
$$\prod_{j=1}^{k}\#\{1\leq i'\leq n\textup{ such that }\pi_j(a^{(i')})=\pi_j(a^{(i)})\}$$
where $\#S$ is the number of elements in set $S$ , and $\pi_j$ is the projection $\mathbb{R}^k\to \mathbb{R}^{k-1}$ omitting the $j$ -th coordinate. Then the $t$ -th power mean of the scores of all $a^{(i)}$ 's is at most $n$ .

Note: The $t$ -th power mean of positive real numbers $x_1,\ldots,x_n$ is defined as
$$\left(\frac{x_1^t+\cdots+x_n^t}{n}\right)^{1/t}$$
when $t\neq 0$ , and it is $\sqrt[n]{x_1\cdots x_n}$ when $t=0$ .

*Proposed by Cheng-Ying Chang and usjl*
